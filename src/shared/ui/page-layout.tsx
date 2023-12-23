import type { FC, ReactNode } from "react";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-screen p-[20px] bg-ctp-crust flex">
      {children}
    </div>
  );
};

export default PageLayout;
