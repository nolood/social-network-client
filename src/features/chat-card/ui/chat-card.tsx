import { type FC } from "react";
import { type ChatMockType } from "~/widgets/chats/ui/chats";
import { Avatar } from "primereact/avatar";
import { DateTime } from "luxon";

const ChatCard: FC<{ item: ChatMockType }> = ({ item }) => {
  return (
    <button className="flex px-[20px] py-[10px] hover:bg-ctp-crust gap-[16px]">
      <Avatar
        label={item.avatar}
        size="large"
        shape={"circle"}
        className="!w-[56px] !h-[48px]"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <p className="font-medium">Egor Ponomarev</p>
          <p>{DateTime.fromJSDate(item.lastMessage.time).toFormat("HH:mm")}</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-ctp-surface2 text-left">{item.lastMessage.text}</p>
          <i className="pi-paperclip"></i>
        </div>
      </div>
    </button>
  );
};

export default ChatCard;
