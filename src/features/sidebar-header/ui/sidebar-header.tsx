import { Avatar } from "primereact/avatar";
import { type FC } from "react";

const SidebarHeader: FC = () => {
  return (
    <div>
      <div>
        <Avatar label={"AO"} shape={"circle"} size={"large"} />
      </div>
      <div className="mt-[20px]">
        <p>nolood</p>
        <a className="capitalize text-ctp-lavender hover:underline cursor-pointer">
          Set emoji status
        </a>
      </div>
    </div>
  );
};

export default SidebarHeader;
