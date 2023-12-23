import { type FC } from "react";

const ChatUserPanel: FC = () => {
  return (
    <div className="bg-ctp-base w-full py-[10px] px-[20px] rounded-[2px] ml-[1px]">
      <div>
        <p>Egor Ponomarev</p>
        <p className="text-ctp-surface2 text-[0.9rem]">
          last seen 6 minutes ago
        </p>
      </div>
    </div>
  );
};

export default ChatUserPanel;
