import { useState, useEffect } from "react";
import { MessageType, ProcessData, ProcessMessage } from "../types";

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sourceId, setSourceId] = useState("");
  const [chatMessages, setChatMessages] = useState<MessageType[]>([
    {
      sender: "assistant",
      message: "商品についてお答え致します。",
      direction: "incoming",
      position: "normal",
    },
  ]);

  useEffect(() => {
    loadFile();
  }, []);

  async function loadFile() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/loadFile", {
        method: "POST",
      });
      const sourceIdData = await response.json();
      setSourceId(sourceIdData.sourceId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSendMessage = async (message: string) => {
    const newChatMessage: MessageType = {
      sender: "user",
      message: message,
      direction: "outgoing",
      position: "normal",
    };
    const latestChatMessages = [...chatMessages, newChatMessage];
    const processChatMessages = latestChatMessages.map((message) => {
      return {
        role: message.sender === "ChatGPT" ? "assistant" : message.sender,
        content: message.message,
      };
    });
    setChatMessages(latestChatMessages);
    setIsLoading(true);
    await processMessage(processChatMessages, newChatMessage);
  };

  async function processMessage(
    latestChatMessages: ProcessMessage[],
    newChatMessage: MessageType
  ) {
    const processData: ProcessData = {
      sourceId,
      messages: latestChatMessages,
    };
    if (!processData.sourceId || !processData.messages)
      throw Error("Invalid processData");

    try {
      const response = await fetch("http://localhost:8000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processData),
      });
      const content = await response.json();
      setChatMessages([
        ...chatMessages,
        newChatMessage,
        {
          message: content.data,
          sender: "ChatGPT",
          direction: "incoming",
          position: "normal",
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    chatMessages,
    handleSendMessage,
  };
};
