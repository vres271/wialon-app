import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createHashRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/#",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <div className="App" style={{margin: 'auto'}}>
      <div>
        <a href='/#'>Home</a>
        <a href='/#profile'>Profile</a>
      </div>[
      <RouterProvider router={router} />]
    </div>
  );
}

export default App;
