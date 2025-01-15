import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router';
import IndexHome from './components/Home/IndexHome.jsx';
import About from './components/About/IndexAbout.jsx';
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element : <IndexHome />,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "services",
        element: <h1>services</h1>,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
