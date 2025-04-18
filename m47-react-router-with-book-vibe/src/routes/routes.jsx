import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookDetails from "../pages/bookDetails/BookDetails";
import ReadList from "../pages/readlist/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/readList",
        loader: () => fetch("booksData.json"),
        Component: ReadList,
      },
    ],
  },
]);
