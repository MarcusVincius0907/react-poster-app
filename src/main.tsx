import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './routes/MainLayout'
import Posts from './routes/Posts'
import NewPost from './routes/NewPost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Posts />,
        children: [
          {
            path: 'create-post',
            element: <NewPost />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
