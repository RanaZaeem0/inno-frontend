import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUP from './pages/SignUp.js';

import Signin from './pages/Signin.js';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import AuthLayout from './pages/AuthLayout.tsx';
import Allblog from './pages/Allblog.tsx';
import Addblog from './pages/Addblog.tsx';
import Updateblog from './componut/Updateblog.tsx';
import ReadBlog from './componut/ReadBlog.tsx';
import Home from './pages/Home.tsx';
import Profile from './componut/Profile.tsx';
import UserUpdate from './componut/UserUpdate.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:    <App/>,
    children:[
      {
        path: "/",
        element:      <Home/>
            },
      {
        path: "/signin",
        element:<AuthLayout>
        <Signin/>
      </AuthLayout>
      },{
        path: "/signup",
        element:<AuthLayout>
        <SignUP/>
      </AuthLayout>
      },
      {
        path: "/allblog",
        element:<Allblog/>
      
      },
      {
        path: "/addblog",
        element:<AuthLayout>
        <Addblog/>
      </AuthLayout>
      },
      {
        path: "/updateblog",
        element:<AuthLayout>
        <Updateblog/>
      </AuthLayout>
      },
      {
        path: "/readblog",
        element:
        <ReadBlog/>
    
      },
      {
        path: "/profile",
        element:<AuthLayout>
        <Profile/>
      </AuthLayout>
      },
      {
        path: "/userupdate",
        element:<AuthLayout>
        <UserUpdate/>
      </AuthLayout>
      },
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
