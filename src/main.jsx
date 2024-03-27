import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import ReadPages from './pages/ReadPages.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import { ToastContainer } from 'react-toastify';
import ReadBooks from './components/ReadBooks/ReadBooks.jsx';
import WishBookLists from './components/WishBookLists/WishBookLists.jsx';


  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json')
          },
          {
            path: 'wishBookLists',
            element: <WishBookLists></WishBookLists>,
            loader: () => fetch('/books.json')
          }
        ]
      },
      {
        path: '/readPages',
        element: <ReadPages></ReadPages>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
