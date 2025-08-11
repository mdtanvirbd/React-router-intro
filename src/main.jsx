import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/About/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>


      },
      {
        path:'/users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: '/user/:userId',
        loader: async ({ params }) => {
         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
         if (!res.ok) {
         throw new Response("User not found", { status: 404 });
         }
         return res.json();
        
  },
         element: <UserDetails />
},
      {
        path:'/posts',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }


    ]
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
