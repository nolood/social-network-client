import "./styles/globals.css";
import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router/router";
import { type FC } from "react";
import { PrimeReact } from "~/app/providers";

const App: FC = () => {
  return (
    <PrimeReact>
      <RouterProvider router={router} />
    </PrimeReact>
  );
};

export default App;
