import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { LayoutWrapper } from "./components/wrapper/LayoutWrapper";
import { useApp } from "./hooks/useApp";
import { AvatarComponent } from "./components/avatar/Avatar";

function App() {
  const { isLoading, chatMessages, handleSendMessage } = useApp();
  return (
    <LayoutWrapper>
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={isLoading ? <TypingIndicator /> : null}
          >
            {chatMessages.map((message, index) => {
              return (
                <Message key={message.message + index} model={message}>
                  <AvatarComponent isUser={message.sender !== "user"} />
                </Message>
              );
            })}
          </MessageList>
          <MessageInput
            placeholder="Ask question here"
            attachButton={false}
            onSend={handleSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </LayoutWrapper>
  );
}

export default App;
