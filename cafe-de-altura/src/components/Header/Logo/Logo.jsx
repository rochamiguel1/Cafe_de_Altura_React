import taza from "../../assets/Vectorcoffee.png"

export default function Logo () {

    return (
        <div className="flex text-2xl justify-center items-center ">
            <p className=" bg-navColor">cafedealtura.com</p>
            <img src={taza} alt="cup" className="bg-navColor "/>
        </div>
    )
}