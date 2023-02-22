import { useEffect, useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import arrow from "../../assets/arrow.png"

export default function CoffeeList() {

    const [coffeeBag, setcoffeeBag] = useState([])

    useEffect(() => {
        fetch("https://cafe-de-altura-api.vercel.app/api/products")
            .then(res => res.json())
            .then(data => setcoffeeBag(data.products))
            .catch(error => (error))

    }, []);


    return (
        <>
            <div className="flex bg-blanco flex-col p-16 ">
                <div className=" mx-5 text-verde text-2xl font-medium leading-7" >
                    <h2 >Novedades</h2>
                </div>
                <div className="flex mx-auto my-5">
                    {
                        coffeeBag.slice(0, 4).map((bolsacafe, i) => {
                            return <CoffeeCard brand={bolsacafe.brand} price={bolsacafe.price} img_url={bolsacafe.img_url} key={i} />
                        }
                        )
                    }
                </div>
                <div className="flex items-center justify-center gap-1 mt-5 leading-4">
                    <p>Ver todos</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </>

    )


}