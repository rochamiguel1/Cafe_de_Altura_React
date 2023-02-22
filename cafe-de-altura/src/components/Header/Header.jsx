
import NavLinks from "./NavLinks/NavLinks";
import taza from "../../assets/Vectorcoffee.png"
import tel from '../../assets/Icontel.png'
import Button from "./Button/Button";
import bag from "../../assets/Group.png"


export default function Header() {
    return (
        <>
            <div className="flex bg-navColor gap-x-7 text-blanco  p-4 items-center justify-between ">

                <div className="flex gap-1">
                    <p className=" bg-navColor text-2xl ">cafedealtura.com</p>
                    <img src={taza} alt="cup" className="bg-navColor h-6" />
                </div>
                < NavLinks />
                <div className="flex gap-1">
                    <img src={tel} alt="" className="h-4 " />
                    <p className="text-blanco">+34 919 49 05 18</p>
                </div>
                < Button colorbtn={"bg-plomo "} colortext={"text-blanco"} textbtn={"Iniciar sesión"}/>
                
                <img src={bag} className="bg-navColor h-6 gap-x-10" />
            </div>

        </>

    )

}