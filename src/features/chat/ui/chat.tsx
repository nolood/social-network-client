import { type FC } from "react";

const Chat: FC = () => {
  return (
    <div className="flex-1 w-full relative">
      <img
        src={"/bg-temp.jpg"}
        alt=""
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

export default Chat;
