import { createBrowserRouter } from "react-router-dom";

//localhost:5173/

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/tweet',
    element: <h1>Tweet</h1>
  }
])