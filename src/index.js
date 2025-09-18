import React from "react";
import ReactDOM from 'react-dom/client';
import Layout from "./Pages/Layout";
import { HashRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


export default function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="Blog" element={<Blog/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="NoPage" element={<NoPage/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        


        </Route>
      </Routes>
    </HashRouter>
  )
}const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)



