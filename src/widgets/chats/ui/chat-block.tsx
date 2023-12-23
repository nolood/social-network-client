import { Chat, ChatControls, ChatUserPanel } from "~/features";
import { type FC } from "react";

const ChatBlock: FC = () => {
  return (
    <div className="flex-1 h-full flex flex-col">
      <ChatUserPanel />
      <Chat />
      <ChatControls />
    </div>
  );
};

export default ChatBlock;
