import { Microphone, Paperclip, SlyFaceWhitSmile } from "@icon-park/react";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import React, { forwardRef } from "react";

const ChatControls = forwardRef<HTMLTextAreaElement | null>((_, ref) => {
  return (
    <div className="flex items-end absolute bottom-0 left-0 bg-ctp-crust w-full py-[8px] gap-[6px] pl-[6px]">
      <Button icon={<Paperclip size="24" />} text className="!px-[30px]" />
      <InputTextarea
        ref={ref}
        autoResize
        rows={1}
        cols={30}
        unstyled
        autoFocus
        placeholder={"Write a message..."}
        className="max-h-[300px] resize-none bg-transparent border-none outline-none self-center flex-1 text-ctp-text placeholder:text-ctp-text"
      />
      <Button
        icon={<SlyFaceWhitSmile theme="outline" size="24" />}
        text
        className="!px-[30px]"
      />
      <Button
        icon={<Microphone theme="filled" size="24" />}
        text
        className="!px-[30px]"
      />
    </div>
  );
});

ChatControls.displayName = "ChatControls";

export default ChatControls;
