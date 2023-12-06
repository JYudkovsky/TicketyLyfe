import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store/index";

import AuthForm from "./features/auth/AuthForm";
import TicketList from "./features/tickets/TicketList.jsx";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <TicketList /> },
      { path: "/login", element: <AuthForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
