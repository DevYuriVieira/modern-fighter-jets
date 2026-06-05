import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import favicon from "./assets/Images/favicon.png";
import GlobalStyle from "./styles/GlobalStyle";

const faviconLink = document.querySelector("link[rel='icon']");

if (faviconLink) {
  faviconLink.setAttribute("href", favicon);
  faviconLink.setAttribute("type", "image/png");
} else {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = favicon;
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
