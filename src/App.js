import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import List from './pages/lists/List'
import Hotel from './pages/hotel/Hotel'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path = '/' element={<Home/>}/>
    <Route path = '/list' element={<List/>}/>
     <Route path = '/hotel' element = {<Hotel/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
