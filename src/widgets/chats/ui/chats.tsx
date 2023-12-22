import { type FC } from "react";
import ChatCard from "~/features/chat-card/ui/chat-card";

export interface ChatMockType {
  avatar: string;
  isPinned: boolean;
  lastMessage: {
    text: string;
    time: Date;
  };
}

const chatMockArray: ChatMockType[] = Array.from(
  { length: 20 },
  (_, index) => ({
    avatar: "EP",
    isPinned: index % 2 === 0,
    lastMessage: {
      text: `message ${index + 1}`,
      time: new Date(),
    },
  }),
);

const Chats: FC = () => {
  return (
    <div className="flex flex-col w-[30%] min-w-[500px] h-full bg-ctp-base rounded-[6px] overflow-y-auto">
      {chatMockArray.map((chat, index) => (
        <ChatCard key={index} item={chat} />
      ))}
    </div>
  );
};

export default Chats;
