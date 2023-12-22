import { type FC, type ReactNode } from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-purple/theme.css";

const PrimeReact: FC = ({ children }: { children: ReactNode }) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};

export default PrimeReact;
