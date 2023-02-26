import arrow from "../../assets/arrow.png"
import CoffeeCard from "../CoffeeCard/CoffeeCard"

import { useContext } from "react";
import { ProductsContext } from "../../App";

import React from 'react'
import { Link } from "react-router-dom";
import Shop from "../../Pages/Shop";
import CoffeeList from "../CoffeeList/CoffeeList";

export default function Novedades() {

    const { coffeeBag } = useContext(ProductsContext)
    return (
        <div className="flex bg-blanco flex-col p-16 ">
            <div className=" mx-5 text-verde text-2xl font-medium leading-7" >
                <h2 className="text-center mb-6">Novedades</h2>
            </div>
            <div className="flex justify-center">
                {
                    coffeeBag.slice(0, 4).map((bolsacafe, i) => {
                        return <CoffeeCard brand={bolsacafe.brand} price={bolsacafe.price} img_url={bolsacafe.img_url} key={i} id={bolsacafe._id} />
                    })
                }


            </div>
            <div className="flex items-center justify-center gap-3 mt-5 leading-4">
                <Link to={'/Shop'}  > <p className="underline">Ver todos</p></Link>
                <img src={arrow} alt="" />
            </div>
        </div>

    )
}
