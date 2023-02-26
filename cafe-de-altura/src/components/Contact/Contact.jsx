import iconphone from "../../assets/Iconphone.png"
import details from "../../assets/Detail.png"
import ContactForm from "../ContactForm/ContactForm"

export default function Contact() {
    return (
        <div className="bg-bg-contact ">
            <div className="flex bg-bg-contact justify-between mt-8 max-w-[1200px]">
                <div className=" flex flex-col p-8 justify-center items-start gap-4">
                    <h1 className="text-lg font-semibold leading-6 mb-4 flex justify-start">Entra en contacto con nosotros</h1>
                    <p className="flex justify-start text-sm">Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes
                        posible.</p>
                    <p className="mb-6 flex justify-start text-sm">También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.
                    </p>
                    <div className=" text-sm flex-col">
                        <p className="flex justify-start">742 Evergreen Terrace </p>
                        <p className="flex justify-start">Springfield, OR 12345</p>
                    </div>
                    <div className="flex justify-start mb-2 text-sm">
                        <img src={iconphone} alt="" />
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <img src={details} alt="" />
                    <p className="mt-6 flex justify-start text-sm">¿Buscas un trabajo? <a href=""> Ver nuestras ofertas.</a></p>
                </div>
                < ContactForm />
            </div>
        </div>
    )
}