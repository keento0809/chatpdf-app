import { MessageDirection } from "@chatscope/chat-ui-kit-react/src/types/unions";

export type MessageType = {
  sender: "user" | "assistant" | "ChatGPT";
  message: string;
  direction: MessageDirection;
  position: 0 | 2 | 1 | "normal" | "single" | "first" | "last" | 3;
};

export type ProcessData = {
  sourceId: string;
  messages: ProcessMessage[];
};

export type ProcessMessage = {
  role: "user" | "assistant" | "ChatGPT";
  content: string;
};
