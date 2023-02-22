import taza from "../../assets/Vectorcoffee.png"
import tel from "../../assets/Icontel.png"
import mail from "../../assets/Iconmail.png"
export default function Footer() {
    return (
        <footer>
            <div className="flex bg-footer text-blanco justify-between ">
                <div className="flex flex-col m-8 gap-4 ">
                    <div className="flex gap-1 text-2xl">
                        <p >cafedealtura.com</p>
                        <img src={taza} alt="cup" />
                    </div>
                    <p className=" flex justify-start">Te ayudamos en</p>
                    <button className="bg-plomo p-1 rounded flex gap-1 items-center justify-center">
                        <img src={tel} alt="" />
                        <p>+34 919 49 05 18</p>
                    </button>
                    <button className="bg-plomo p-1 rounded flex gap-1 items-center">
                        <img src={mail} alt="" />
                        <p>hola@cafedealtura.com</p>
                    </button>
                </div>
                <div className="flex mr-52">
                    <div className="flex flex-col m-10 gap-4 mt-16">
                        <p>Tienda</p>
                        <p>Suscripción</p>
                        <p>Para empresas</p>
                        <p>Sobre nosotros</p>
                        <p>Contacto</p>
                    </div>
                    <div className="flex flex-col m-10 gap-4 mt-16">
                        <p>Política de privacidad</p>
                        <p>Política de cookies</p>
                        <p>Términos y condiciones</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}