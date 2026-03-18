import Products from "./inventory_components/Products"
import Create from "./inventory_components/Create"

import {useContext, useState} from "react"
import { AppNameContext } from "./context/AppNameContext"
import { ProductContext } from "./context/ProductContext"


const Inventory = () => {
    // how to use context

     const {appName} =  useContext(AppNameContext);//which context you wan use 
      const {products} =   useContext(ProductContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <h1>{appName}</h1>
                    <h4>Total Products:{products.length}</h4>
                </div>
            </div>
            <Create/>
            <Products/>
        </div>
    )
}

export default Inventory