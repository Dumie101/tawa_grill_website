import React from 'react';

import { AboutUs, Header, Menu, Home } from './container';
import { Navbar } from './components';
import { Navheader } from './components';
import './App.css';
import{Routes, Route, BrowserRouter} from 'react-router-dom'


const App = () => (
  <div>
    {/* <Navbar /> 
    <Header />
    <Navheader/> */}
    {/* <AboutUs /> */}

    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;