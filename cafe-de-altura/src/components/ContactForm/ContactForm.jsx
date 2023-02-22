
export default function ContactForm() {
    return (
        <form className="flex flex-col bg-blanco p-10 gap-1 ">
            <label className=" flex justify-start" htmlFor="name">Nombre completo</label>
            <input className="border rounded" type="text" id="name" />
            <label className=" flex justify-start" htmlFor="mail">Email</label>
            <input className="border rounded" type="email" name="mail" id="" />
            <label className=" flex justify-start" htmlFor="phone">teléfono</label>
            <input className="border rounded" type="tel" name="phone" id="phone" placeholder="+1 (555) 123-4567" />
            <textarea className="border rounded mt-4" name="ayuda" placeholder="¿En qué podemos ayudarte?" id="ayuda" rows="10"
                cols="10"></textarea>
            <div className=" flex justify-start">
                <input  type="checkbox" name="agree" id="agree" />
                <label  htmlFor="agree">Acepto la <u>Política de Privacidad</u> y los <u>Términos y condiciones.</u>
                </label>
            </div>
            <input className="bg-verde text-blanco bg-green-800 text-sm p-2 w-20 rounded-lg m-5" type="submit" name="Enviar" />
        </form>
    )

}