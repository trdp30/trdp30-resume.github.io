import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./pages/App";
import AppMorphic from "./pages/AppMorphic";
import ArcanaResume from "./pages/ArcanaResume";
import AvomaResume from "./pages/AvomaResume";
import FAANGResume from "./pages/FAANGResume";
import FullStackResume from "./pages/FullStackResume";
import JJMResume from "./pages/JJMResume";
import LightResume from "./pages/LightResume";
import StaffEngineerResume from "./pages/StaffEngineerResume";
import StaffEngineerResumeLite from "./pages/StaffEngineerResumeLite";
import StaffEngineerResumeDev from "./pages/StaffEngineerResumeDev";
import StaffEngineerResumeEditor from "./pages/StaffEngineerResumeEditor";
import XAIResume from "./pages/XAIResume";
import "./styles/index.css";

// Get the base path from vite config or default to empty string for local dev
const basePath = import.meta.env.BASE_URL || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="morphic" element={<AppMorphic />} />
          <Route path="x-ai-resume" element={<XAIResume />} />
          <Route path="avoma-resume" element={<AvomaResume />} />
          <Route path="arcana-resume" element={<ArcanaResume />} />
          <Route path="faang-resume" element={<FAANGResume />} />
          <Route path="full-stack-resume" element={<FullStackResume />} />
          <Route path="jjm-resume" element={<JJMResume />} />
          <Route path="staff-engineer-resume" element={<StaffEngineerResume />} />
          <Route path="staff-engineer-lite" element={<StaffEngineerResumeLite />} />
          <Route path="staff-engineer-dev" element={<StaffEngineerResumeDev />} />
          <Route path="staff-engineer-editor" element={<StaffEngineerResumeEditor />} />
          <Route path="light-resume" element={<LightResume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
