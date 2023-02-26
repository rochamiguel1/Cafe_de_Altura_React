import ConditionCard from "../ConditionCard/ConditionCard";
import check from "../../assets/Icon.png"
import truck from "../../assets/Icontruck.png"
import gift from "../../assets/Icongift.png"
export default function Conditions(icon, text1, text2) {

    return (
        <div className="px-36 py-12 bg-coffeebg bg-cover bg-center ">
            <h1 className="text-2xl text-blanco w-90 h-7 flex justify-center font-medium leading-7">Café con las mejores condiciones</h1>
            <div className='flex justify-center items-center gap-6 p-6 '>
                <ConditionCard icon={check} text1={'Recibe tu pedido sin preocuparte'} text2={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'} />
                <ConditionCard icon={truck} text1={'Envío en 24/48h'} text2={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'} />
                <ConditionCard icon={gift} text1={'Descuentos y beneficios'} text2={'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'} />
            </div>
        </div>
    )
}