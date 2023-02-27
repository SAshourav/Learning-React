import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Product from './Component/Products/Product';
import Main from './layout/Main';
import Friends from './Component/Friends/Friends';
import FriendDetails from './Component/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/' , element: <Main></Main> , children: [
        {path: '/', element: <Home></Home>},
        {path: '/product', element: <Product></Product>},
        {path: '/home', element: <Home></Home>},
        {path: '/about', element: <About></About>},
        {path: '/friends', element: <Friends></Friends>, loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        }},
        {path: '/friend/:friendId', //clone dile dynamic hoy
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element: <FriendDetails></FriendDetails>}
    ]},
    {path: '*', element: <div>This Route not found , Error 404</div>}
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
