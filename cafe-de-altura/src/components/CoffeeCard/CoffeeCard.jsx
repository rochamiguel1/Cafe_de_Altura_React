import { useContext } from "react"
import { ProductsContext } from "../../App";


export default function CoffeeCard({ brand, price, img_url, id }) {

    const { setAdded, added } = useContext(ProductsContext)


    const handleAddCoffee = () => {
        setAdded(prev => {
            const newPrev = [...prev]
            const index = newPrev.findIndex(coffee => coffee.id === id)
            console.log(newPrev, 'Indice: ' + index)
            if (index !== -1) {
                newPrev[index].quantity += 1
            } else {
                newPrev.push({
                    brand: brand,
                    price: price,
                    img_url: img_url,
                    id: id,
                    quantity: 1
                })
            }

            console.log(newPrev);
            return newPrev



        })
        console.clear()
    }


    return (
        <>
            <div className="group flex border border-[grey] justify-center flex-col items-center font-semibold mr-5 bg-blanco hover:bg-hovercafe p-8 gap-2 rounded-2xl m-1" >
                <img src={img_url} />
                <p>{brand}</p>
                <p>{price},00 €</p>
                <button
                    onClick={handleAddCoffee}
                    className="flex-col  items-center justify-center bg-verde opacity-80 group-hover:opacity-100 text-blanco p-2 gap-2 rounded w-16 h-8" >Añadir</button>
            </div>

        </>
    )
}


