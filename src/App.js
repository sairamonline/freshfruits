import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Body from './Body'
import View from './View'
import Footer from './Footer'
import Navbar from './Navbar';
function App() {
  return (
    <div>
     <Navbar /> 
    <BrowserRouter>
    <Route exact path="/" component={Body}></Route>
    <Route exact path="/view" component={View}></Route>

    </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
