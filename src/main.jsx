import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.scss'
import { Provider } from "react-redux";
import { movieStore } from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Explore from "./routes/Explore/Explore.jsx";
import Details from "./routes/Details/Details.jsx";
import Fror from "./routes/404/Fror.jsx";
import SearchResult from "./routes/SearchResult/SearchResult.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore/:mediaType", element: <Explore /> },
      { path: "/:mediaType/:id", element: <Details /> },
      { path: "/search/:query", element: <SearchResult /> },
      { path: "*", element: <Fror /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={movieStore}>
    <RouterProvider router={router} />
  </Provider>
);
