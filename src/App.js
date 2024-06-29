import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home/index.js";
import About from "./pages/About/index.js";
import AddRecipe from "./pages/AddRecipe/index.js";
import Recipe from "./pages/Recipe/index.js";
import Blog from "./pages/Blogs/index.js";
import Layout from "./pages/Layout/index.js";
import Login from "./pages/Login/index.js"
import Register from "./pages/Register/index.js"
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import HeaderWithButton from "./components/HeaderWithButton/index.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/addRecipe",
        element: <AddRecipe />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/footer",
        element: <Footer />,
        },
        {
          path: "/HeaderWithButton",
          element: <HeaderWithButton />
        },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
