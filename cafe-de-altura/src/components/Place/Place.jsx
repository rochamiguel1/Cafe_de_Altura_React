import shop from "../../assets/image-place.jpg"
export default function Place(){

    return(
        <div className="flex m-8">
            <div className="flex flex-col p-8 justify-center items-center gap-4">
                <h2 className="text-verde font-medium text-2xl leading-7">Pruébalo en nuestro coffee shop</h2>
                <p className="leading-4 text-sm font-normal">Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
            </div>
         <img src={shop} alt="" className="mt-4"/>
        </div>

    )
}