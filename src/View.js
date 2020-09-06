import React from 'react';
import Data from './fruits.json'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';

function View(props) {
    let info= Data[props.location.viewDetails.id]
    console.log(info)


    return (
        <div>
        <div className="container">
            <div className="row viewmargine">
                

                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
               
                <div className="card mt-3 cardheight">
                <div className="card-body">
                <img src={info.img} className='img-fluid w-100 imght'></img>
                </div>
                </div>

                </div>


                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="card mt-3 cardheight">  
                <div className="card-body">
                <h1>{info.name}</h1>
                <p className="card-content">{info.desc}</p>
                <p className="text-danger display-4">{info.Price}</p>
                <Link className="btn btn-warning btn-lg btn-block">Add to cart</Link>
                <Link className="btn btn-success btn-lg btn-block">Proceed to Payment</Link>

                </div>
                </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default View;