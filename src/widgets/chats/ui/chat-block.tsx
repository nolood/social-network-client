import { Chat, ChatControls, ChatUserPanel } from "~/features";
import { type FC, useRef } from "react";

const ChatBlock: FC = () => {
  const refTextarea = useRef<HTMLTextAreaElement | null>(null);

  const handleClick = (): void => {
    if (refTextarea.current) {
      refTextarea.current.focus();
    }
  };

  return (
    <div className="flex-1 h-full flex flex-col relative" onClick={handleClick}>
      <ChatUserPanel />
      <Chat />
      <ChatControls ref={refTextarea} />
    </div>
  );
};

export default ChatBlock;
