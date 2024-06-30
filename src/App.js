import React from 'react';
import { AboutUs, Header, Menu, Home } from './container';
import { Navbar } from './components';
import { Navheader } from './components';
import './App.css';
import{Routes, Route, BrowserRouter} from 'react-router-dom'

import { Appetizers, Indian_Bread, Biryani, Drinks_and_Desserts, Hakka_Specialties, Non_Vegetarian_Curries, Paneer_Curries, Rice, Tandoori_Specialities, Tawa_Specials, Vegetarian_Curries } from './container'



const App = () => (
  <div>
    {/* <Navbar /> 
    <Header />
    <Navheader/> */}
    {/* <AboutUs /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Appetizers' element={<Appetizers/>} />
        <Route path='/Indian_Bread' element={<Indian_Bread/>} />
        <Route path='/Rice' element={<Rice/>} />
        <Route path='/Drinks_and_Desserts' element={<Drinks_and_Desserts/>} />
        <Route path='/Tandoori_Specialities' element={<Tandoori_Specialities/>} />
        <Route path='/Biryani' element={<Biryani/>} />
        <Route path='/Tawa_Specials' element={<Tawa_Specials/>} />
        <Route path='/Vegetarian_Curries' element={<Vegetarian_Curries/>} />
        <Route path='/Paneer_Curries' element={<Paneer_Curries/>} />
        <Route path='/Non_Vegetarian_Curries' element={<Non_Vegetarian_Curries/>} />
        <Route path='/Hakka_Specialties' element={<Hakka_Specialties/>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;