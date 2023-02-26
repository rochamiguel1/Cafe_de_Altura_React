
import whitearrow from "../../assets/whitearrow.png"
import Questions from "../Questions/Questions"
import arrowup from "../../assets/up.png"


let question1=  'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'
let question2= 'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los'
let question3=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio voluptatum praesentium adipisci necessitatibus tempore explicabo veniam distinctio a! Voluptatum enim quia minima officia reiciendis, dolor aspernatur assumenda nulla accusantium.'

export default function FrecuencyQuestions() {

  
    return (
        <>
            <div className="flex bg-verde flex-col p-16  items-center">
                <h1 className="text-blanco text-2xl flex justify-center">Preguntas frecuentes</h1>
                <div className="m-5 w-full">
                   <Questions preg={'¿Cómo hago el pedido?'} icon={arrowup} text={question1}/>
                   <Questions preg={'¿Por qué los precios son tan bajos?'} icon={arrowup} text={question2}/>
                   <Questions preg={'¿Es posible enviar café a mi oficina?'} icon={arrowup} text={question3}/>
                  
                </div>
                <div className="flex items-center justify-center gap-3 mt-5 leading-4">
                    <p className="text-blanco text-sm font-semibold underline">Resolvemos tus dudas</p>
                    <img src={whitearrow} alt=""  />
                </div>
            </div>
        </>
    )
}