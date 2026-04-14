import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Frontend & Full-Stack developer with experience building real-world applications using Next.js, TypeScript, and headless CMS. Focused on scalable UI and robust data pipelines."
        />
        <script
          defer
          src="https://umami.zavecheria.com/script.js"
          data-website-id="d790df9d-24e8-4228-8406-f3f6a5df3d31"
        ></script>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
