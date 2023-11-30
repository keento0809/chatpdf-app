import { Avatar } from "@chatscope/chat-ui-kit-react";
import logoImg from "../public/images/supermarket.jpg";
import AvatarImg from "../public/images/avatar-image.jpg";

export const AvatarComponent = ({ isUser }: { isUser: boolean }) => {
  return <Avatar src={isUser ? logoImg : AvatarImg} name="logo" />;
};
