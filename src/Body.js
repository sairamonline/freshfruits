import React from 'react'
import Data from './fruits.json'
import View from './View'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Corousel from "./Corousel"
function Body(props) {

    return (

    <div className="container-fluid">
        <Corousel />
        <div className="row">
            {Data.map((details,index)=>{
                return(
                    <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                        <div className="card mt-3">
                            <img src={details.img} className="img-responsive img-fluid imght" height="75%"/>
                            <div className="card-body">
                            <h3 className="card-title text-center">{details.name}</h3>
                            <div className="text-center">
                                <Link to={{pathname:'/view',viewDetails:{id:index} }} className="btn btn-lg">
                                    <i className={details.View} aria-hidden="true"></i>
                                </Link>
                                <Link to='/' className="btn btn-lg" id="like">
                                    <i className={details.Love} aria-hidden="true"></i>
                                </Link>

                                <button className="btn btn-lg">
                                    <i className={details.Cart} aria-hidden="true"></i>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            
            )}
        </div>
        </div>
    );
}

export default Body;