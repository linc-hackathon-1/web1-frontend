<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/organisms/Header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header pageName={"지자체 상세보기"} />
  </StrictMode>
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '@components/organisms/Header';
import './index.css';
import Footer from '@components/organisms/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header pageName="지자체 상세보기" />
    <Footer />
  </StrictMode>,
>>>>>>> 950a8a6c0a55689c46ce83288f1053df995b671a
);
