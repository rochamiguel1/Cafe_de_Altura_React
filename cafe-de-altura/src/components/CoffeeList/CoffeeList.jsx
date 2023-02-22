import { useContext } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

import { ProductsContext } from "../../App";

export default function CoffeeList() {

    const { coffeeBag } = useContext(ProductsContext)

    return (
        <>
        <h2 className="text-center mb-6 mx-5 text-verde text-2xl font-medium leading-7 mt-8">Últimos orígenes</h2>
            <div className="flex flex-wrap mx-auto justify-center my-5">
                {
                    coffeeBag.map((bolsacafe, i) => {
                        return <CoffeeCard brand={bolsacafe.brand} price={bolsacafe.price} img_url={bolsacafe.img_url} key={i} />
                    })
                }
            </div>
        </>
    )
}