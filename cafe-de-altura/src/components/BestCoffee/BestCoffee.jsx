import planta from "../../assets/coffeeplant.jpg"
import Button from "../Header/Button/Button"

export default function BestCoffee() {

    return (
        <div className="flex p-8 justify-center items-center ">
            <div className="flex  flex-col items-start p-6 ">
                <h4 className="text-verde text-lg font-bold p-2">De la planta a tu taza</h4>
                <h1 className="text-negro text-4xl font-bold text-start items-start p-2">El mejor café del mundo, ahora en tu casa.</h1>
                <p className="text-sm  self-stretch text-left p-2">Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos
                    de café y que puedas viajar desde la comodidad de tu hogar.</p>
                <div className=" flex gap-2 p-2">
                    < Button colorbtn={"bg-negro"} colortext={"text-blanco"} textbtn={"Descubrir orígenes"} />
                    < Button colorbtn={"bg-verde"} colortext={"text-blanco"} textbtn={"Comprar café"} />
                </div>
            </div>
            <img src={planta} />


        </div >
    )
}
