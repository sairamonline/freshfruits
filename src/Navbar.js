import React from 'react';
import './App.css';
function Navbar(props) {
    return (
        <div>
            <header className="container mb-5">
  	<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="bgnav">
    <a class="navbar-brand col-3" href="#">F<sup>2</sup> <i class="fas fa-carrot text-info"></i> FreshFruits</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ">
        <li class="nav-item active">
          <a class="nav-link " href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bestseller</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DryFruits</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">NewArrivals</a>
      </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ContactUs</a>
          </li>
              <li class="nav-item">
          <a class="nav-link" href="#">AboutUs</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 mr-2">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      </form>
      	  <a class="btn text-info" href='UserLike.php'><i class="far fa-heart"></i></a>
           <button class="btn text-info"> <i class="far fa-user"></i></button>
             <button class="btn text-info"><i class="fas fa-shopping-cart"></i><span class="badge badge-warning">1</span></button>
    </div>

  </nav>
  </header>
        </div>
    );
}

export default Navbar;