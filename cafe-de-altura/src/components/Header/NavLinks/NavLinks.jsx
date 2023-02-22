import { Link } from "react-router-dom";

export default function NavLinks() {
    return (
        <div className=" flex bg-navColor gap-x-7 text-sm  ">
            <Link to={'/Shop'}>Tienda</Link>
            <p >Suscripción</p>
            <p >Para empresas</p>
            <p >Sobre Nosotros</p>
            <p >Contacto</p>
        </div>
    )
}