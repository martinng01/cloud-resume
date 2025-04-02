import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/system";

import Page from "./index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <Page />
    </HeroUIProvider>
  </React.StrictMode>
);
