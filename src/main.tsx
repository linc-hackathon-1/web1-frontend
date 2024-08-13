import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/organisms/Header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header pageName={"지자체 상세보기"} />
  </StrictMode>
);
