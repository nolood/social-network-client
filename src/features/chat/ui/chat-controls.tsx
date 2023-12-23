import { Paperclip } from "@icon-park/react";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { type FC } from "react";

const ChatControls: FC = () => {
  return (
    <div className="flex items-end">
      <Button icon={<Paperclip fill="#7E7E7E" size="38" />} text />
      <InputTextarea
        autoResize
        rows={1}
        cols={30}
        unstyled
        className="max-h-[300px]"
      />
    </div>
  );
};

export default ChatControls;
