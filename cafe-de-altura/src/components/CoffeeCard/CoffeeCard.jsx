
export default function CoffeeCard({ brand, price, img_url }) {

    return (
        <>
                <div className="group flex border border-[grey] justify-center flex-col items-center font-semibold mr-5 bg-blanco hover:bg-hovercafe p-8 gap-2 rounded-2xl" >
                    <img src={img_url} />
                    <p>{brand}</p>
                    <p>{price}</p>
                    <button className="flex-col items-center bg-verde opacity-80 group-hover:opacity-100 text-blanco p-2 gap-2 rounded" >Añadir</button>
                </div>
            
        </>
    )
}


