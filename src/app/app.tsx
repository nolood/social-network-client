import "./styles/globals.css";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { type FC } from "react";
import { PrimeReact, SidebarProvider } from "~/app/providers";

const App: FC = () => {
  return (
    <PrimeReact>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </PrimeReact>
  );
};

export default App;
