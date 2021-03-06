import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import axios from "axios"
import MyHeader from "./modules/MyHeader/MyHeader"
import MyFooter from './modules/MyFooter/MyFooter'
import ScrollToTopButton from './modules/ScrollToTopButton/ScrollToTopButton'
import { mainRoutes } from './routes/routes'
import { serverApis } from './env/env'


const App = () => {


  axios.defaults.baseURL = serverApis[0];


  const routes = mainRoutes.map( route => {
    return (
      <Route
        key={route.tag}
        exact path={route.path}
        element={route.component}
      />
    )
  })


  return (
    <Fragment>
      <MyHeader/>
        <Routes>
          {routes}
          <Route 
            path='*' 
            element={<Navigate to="/404" replace />}
          />
        </Routes>
      <MyFooter/>
      <ScrollToTopButton/>
    </Fragment>
  )
}

export default App;
