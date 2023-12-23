import { type FC } from "react";
import { ChatCard } from "~/features";

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

const ChatsList: FC = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {chatMockArray.map((chat, index) => (
        <ChatCard key={index} item={chat} />
      ))}
    </div>
  );
};

export default ChatsList;
