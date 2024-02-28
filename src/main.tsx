import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
