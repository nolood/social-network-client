import { type FC, type ReactNode } from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-purple/theme.css";

import "primeicons/primeicons.css";

const PrimeReact: FC<{ children: ReactNode }> = ({ children }) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};

export default PrimeReact;
