import { Button } from "primereact/button";
import { HamburgerButton } from "@icon-park/react";
import { InputText } from "primereact/inputtext";
import { SidebarModule } from "~/widgets";
import { type FC } from "react";
const SearchBar: FC = () => {
  const { show } = SidebarModule;

  return (
    <div className="w-full flex gap-[20px] items-center px-[20px] py-[10px]">
      <Button
        onClick={show}
        text
        icon={<HamburgerButton theme="outline" size="24" />}
      />
      <InputText
        className="flex-1 p-inputtext-sm !bg-ctp-crust !border-none !text-ctp-text placeholder:!text-ctp-text"
        placeholder={"Search"}
      />
    </div>
  );
};

export default SearchBar;
