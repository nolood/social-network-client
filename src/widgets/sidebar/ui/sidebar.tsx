import { SidebarModule } from "~/widgets";
import { Sidebar } from "primereact/sidebar";
import { observer } from "mobx-react-lite";
import { type FC } from "react";
import { SidebarHeader } from "~/features";

const SidebarLocal: FC = observer(() => {
  const { isVisible, hide } = SidebarModule;
  return (
    <Sidebar
      showCloseIcon={false}
      visible={isVisible}
      onHide={hide}
      className={"!bg-ctp-base !border-none"}
    >
      <SidebarHeader />
    </Sidebar>
  );
});

export default SidebarLocal;
