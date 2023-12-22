import { SidebarModule } from "~/widgets";
import { Sidebar } from "primereact/sidebar";
import { observer } from "mobx-react-lite";
import { type FC } from "react";

const SidebarLocal: FC = observer(() => {
  const { isVisible, hide } = SidebarModule;
  return (
    <Sidebar showCloseIcon={false} visible={isVisible} onHide={hide}>
      dasdasdas
    </Sidebar>
  );
});

export default SidebarLocal;
