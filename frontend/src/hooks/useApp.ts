import { useState, useEffect } from "react";
import { Message } from "../types";

export const useApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sourceId, setSourceId] = useState("");
  const [chatMessages, setChatMessages] = useState<Message[]>([
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

  return {
    isLoading,
  };
};
