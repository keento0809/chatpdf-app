import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { LayoutWrapper } from "./components/wrapper/LayoutWrapper";
import { useApp } from "./hooks/useApp";
import logoImg from "./assets/images/supermarket.jpg";
import AvatarImg from "./assets/images/avatar-image.jpg";

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
                  <Avatar
                    src={message.sender !== "user" ? logoImg : AvatarImg}
                    name="logo"
                  />
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
