import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import MuiThemeProvider from "Theme/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "redux-toolkit/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// For react query default queryclient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

root.render(
  <React.StrictMode>
    <MuiThemeProvider >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <Router>
          <App />
        </Router>
        </Provider>
     
      </QueryClientProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
