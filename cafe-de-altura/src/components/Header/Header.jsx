
import NavLinks from "./NavLinks/NavLinks";

import tel from '../../assets/Icontel.png'
import Button from "./Button/Button";
import bag from "../../assets/Group.png"
import Logo from "./Logo/Logo";


export default function Header() {
    return (
        <>
            <div className="flex bg-navColor gap-x-7 text-blanco  p-4 items-center justify-between ">

                <Logo />
                < NavLinks />
                <div className="flex gap-1 justify-center items-center">
                    <img src={tel} alt="" className="h-4 " />
                    <p className="text-blanco">+34 919 49 05 18</p>
                </div>
                < Button colorbtn={"bg-plomo "} colortext={"text-blanco"} textbtn={"Iniciar sesión"}/>
                
                <img src={bag} className="bg-navColor h-6 gap-x-10" />
            </div>

        </>

    )

}