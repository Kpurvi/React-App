import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CalculatorPage from "./pages/CalculatorPage";
import TodoPage from "./pages/TodoPage";
import PdfPage from "./pages/PdfPage";
import FormPage from "./pages/FormPage";
import GitProfileJS from "./sections/GitProfileWithJS/GitProfileJS";
import TodoApp from "./sections/TodoFakeAPISection/TodoFakeAPIreact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/styles/List.css"; //
import "./assets/styles/Todo.css"; //
import PopupPage from "./pages/PopupPage";
import CarouselPage from "./pages/CarouselPage";
import GithubSearchPage from "./pages/GithubSearchPage";

const ALL_ROUTES = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "calculator",
    element: <CalculatorPage />,
  },
  {
    path: "todo",
    element: <TodoPage />,
  },
  {
    path: "pdf",
    element: <PdfPage />,
  },
  {
    path: "popup",
    element: <PopupPage />,
  },
  {
    path: "carousel",
    element: <CarouselPage />,
  },
  {
    path: "gitsearch",
    element: <GithubSearchPage />,
  },
  {
    path: "gitsearchwithjs",
    element: <GitProfileJS />,
  },
  {
    path: "todofakeapireact",
    element: <TodoApp />,
  },
  {
    path: "contactform",
    element: <FormPage />,
  },
];

const router = createBrowserRouter(ALL_ROUTES);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
