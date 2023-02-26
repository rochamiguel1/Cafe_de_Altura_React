
import NavLinks from "./NavLinks/NavLinks";
import { Link } from "react-router-dom";
import tel from '../../assets/Icontel.png'
import Button from "./Button/Button";
import bag from "../../assets/Group.png"
import Logo from "./Logo/Logo";
import { useContext } from "react";
import { ProductsContext } from "../../App";




export default function Header() {

    const { added } = useContext(ProductsContext)

    const bagQuantity = added.reduce((acc, coffee) => {
        return acc += coffee.quantity
    }, 0)



    return (
        <>
            <div className="flex bg-navColor gap-x-7 text-blanco  p-4 items-center justify-between ">

                <Logo />
                < NavLinks />
                <div className="flex gap-1 justify-center items-center">
                    <img src={tel} alt="" className="h-4 " />
                    <p className="text-blanco">+34 919 49 05 18</p>
                </div>
                < Button colorbtn={"bg-plomo "} colortext={"text-blanco"} textbtn={"Iniciar sesión"} />
                <div className="flex gap-3 items-center ">
                    <Link to={'/Cart'}><img src={bag} className="bg-navColor h-6 " /></Link>
                    <p className={`text-blanco bg-plomo rounded-full p-2 text-xs ${bagQuantity === 0 ? 'hidden' : ''} `}>{bagQuantity}</p>
                </div>
            </div>

        </>

    )

}