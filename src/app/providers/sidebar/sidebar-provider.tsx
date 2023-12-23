import type { FC, ReactNode } from "react";
import { Sidebar } from "~/widgets";

const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default SidebarProvider;
