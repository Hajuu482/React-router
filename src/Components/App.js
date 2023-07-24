import React from 'react';

import {Routes, Route} from 'react-router-dom'

import Home from "../Pages/Home"

import Feature from "../Pages/Feature"

import About from "../Pages/About"

import Blog from "../Pages/Blog"


import './App.css';

function App() {

  return <div>

    <Routes>

    <Route path='/' element= {<Home/>}/>

    <Route path='/Feature' element= {<Feature/>}/>

    <Route path='/About' element= {<About/>}/>

    <Route path='/Blog' element= {<Blog/>}/>

    </Routes>
    
  </div>
   
}

export default App;
