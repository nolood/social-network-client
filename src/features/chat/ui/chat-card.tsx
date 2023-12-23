import { type FC } from "react";
import { type ChatMockType } from "~/widgets/chats/ui/chats-list";
import { Avatar } from "primereact/avatar";
import { DateTime } from "luxon";
import { Pin as PinIcon } from "@icon-park/react";

const ChatCard: FC<{ item: ChatMockType }> = ({ item }) => {
  return (
    <button className="flex px-[20px] py-[10px] hover:bg-ctp-crust gap-[16px]">
      <div>
        <Avatar label={item.avatar} size="large" shape={"circle"} />
      </div>
      <div className="flex flex-col w-full gap-[5px]">
        <div className="flex justify-between w-full">
          <p className="font-medium">Egor Ponomarev</p>
          <p>{DateTime.fromJSDate(item.lastMessage.time).toFormat("HH:mm")}</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-ctp-surface2 text-left">{item.lastMessage.text}</p>
          {item.isPinned && <PinIcon theme="filled" size="16" fill="#7E7E7E" />}
        </div>
      </div>
    </button>
  );
};

export default ChatCard;
