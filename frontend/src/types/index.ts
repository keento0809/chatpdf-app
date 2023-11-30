export type Message = {
  sender: "user" | "assistant" | "ChatGPT";
  message: string;
  direction: string;
  position: string;
};

export type ProcessData = {
  sourceId: string;
  messages: ProcessMessage[];
};

export type ProcessMessage = {
  role: "user" | "assistant" | "ChatGPT";
  content: string;
};
