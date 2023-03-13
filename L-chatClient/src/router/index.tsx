import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import NotFound from '../components/common/NotFound'
import Login from '../components/Login/Login'
import ChatPage from '../Pages/chat'
import Layout from '../Pages/layout'

const routesList = [
  {
    path: '/',
    element: <Navigate to='/chat'></Navigate>
  },
  {
    path: '/chat',
    element: <Layout></Layout>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '*',
    element: <Navigate to='/404'></Navigate>
  },
  {
    path: '/404',
    element: <NotFound></NotFound>
  }
]

export default function index() {
  const routes = useRoutes(routesList);
  return routes;
}
