import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import Home from "./components/navLinks/Home.jsx";
import Mobiles from "./components/navLinks/Mobiles.jsx";
import Laptops from "./components/navLinks/Laptops.jsx";
import Users from "./components/navLinks/Users.jsx";
import Users2 from "./components/navLinks/Users2.jsx";
import UserDetails from "./userdetails/UserDetails.jsx";
import Posts from "./components/posts/Posts.jsx";
import Post from "./components/posts/Post.jsx";
import PostDetails from "./components/posts/PostDetails.jsx";

const user2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Waiting for message....</span>}>
            <Users2 user2Promise={user2Promise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },
  // {
  //   path: "about",
  //   element: <div>About me here</div>,
  // },
  // {
  //   path: "blogs",
  //   element: <div>All my blogs are here</div>,
  // },
  // {
  //   path: "app",
  //   element: <App></App>,
  //   // alternative--
  //   // Component: App,
  // },
  {
    path: "*",
    element: <h3>Not Found : 404 Status</h3>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
