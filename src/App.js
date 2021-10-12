import React from "react";
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Contact from './Contact';
import Productos from './Productos';

import{Route, Link} from 'react-router-dom';

import NavBar from "./NavBar";

function App() {
  return <div className="App">
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/productos" component={Productos} />
    <Route exact path="/contact" component={Contact} />
  </div>;
}



export default App;
