import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './routes/root';
import Beranda from "./routes/beranda";
import Tentang from "./routes/tentang";
import Kontak from "./routes/kontak";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Beranda />,
      },
      {
        path: "/tentang",
        element: <Tentang />,
      },
      {
        path: "/kontak",
        element: <Kontak />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)