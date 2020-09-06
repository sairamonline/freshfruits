import React from 'react';
import './App.css'
function Corousel(props) {
    return (
        <div className="container-fluid mt-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active py-2 bg-info"  ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="py-2 bg-info" ></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 cbi" src="images/bg.png" alt="First slide" />
    
    <div className="carousel-caption d-md-block col-md-3 col-sm-6" id="captions">
    	<h1 className="text-dark mb-3" >Our Promise 100% Quality Guarantee</h1>
    <h5 className="text-dark mb-3">You'll Love The Taste ,Freshness and Quality of Our Products</h5>
    <button className="btn btn-outline-dark btn-light mb-3">ShopNow</button>
  	</div>

    </div>
    <div className="carousel-item">
      <img className="d-block w-100 cbi" src="images/bg1.jpg" alt="Second slide" />


    <div className="carousel-caption d-md-block col-md-3 col-sm-6" id="captions">
    	<h1 className="text-dark mb-3">Our Promise 100% Quality Guarantee</h1>
    <h5 className="text-dark mb-3">You'll Love The Taste ,Freshness and Quality of Our Products</h5>
    <button className="btn btn-outline-dark btn-light mb-3x">ShopNow</button>
  	</div>

    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only ">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only text-info">Next</span>
  </a>
</div>
        </div>
    );
}

export default Corousel;