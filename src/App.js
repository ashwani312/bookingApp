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
import SignIn from "./pages/signIn/SignIn";
function App() {
  return (
   <div className="appFont">
   <BrowserRouter>
   <Routes>
    <Route path = '/' element={<Home/>}/>
    <Route path = '/list' element={<List/>}/>
     <Route path = '/hotel' element = {<Hotel/>}/>
     <Route path = '/signup' element = {<SignIn/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
