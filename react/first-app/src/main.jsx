import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import App from "./use_effect/App.jsx";
// import App from "./use_ref/App.jsx";
// import App from "./conditional_rendering/App.jsx";
// import App from "./exercise/display_the-cards/App.jsx";
// import App from "./handling_events/App.jsx";
// import App from "./TodoListProj/App.jsx";
// import App from "./router/App.jsx";
import App from "./context/App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

/*
  React.StrictMode :- 
  Strict mode helps catch problems in development and production.
  it will run our code two time in Strict mode.
*/
