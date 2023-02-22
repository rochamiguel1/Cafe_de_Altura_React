import { Link } from "react-router-dom"
import taza from "../../../assets/Vectorcoffee.png"

export default function Logo () {

    return (
        <div className="flex text-2xl justify-center items-center ">
            <Link to={'/'} className="  text-2xl">cafedealtura.com</Link>
            <img src={taza} alt="cup" className="ml-1 h-6"/>
        </div>
    )
}