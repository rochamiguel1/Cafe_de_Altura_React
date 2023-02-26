
import React, { useContext, useState } from 'react'
import Button from '../Header/Button/Button'
import CestaProductos from './CestaProductos'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../App'



export default function Cesta() {

    const [envioValue, setEnvioValue] = useState("0")

    const { added ,} = useContext(ProductsContext)

    const bagQuantity = added.reduce((acc, coffee) => {
        return acc += coffee.quantity
    }, 0)

    const subtotal = added.reduce((acc, coffee) => {
        return acc += coffee.price * coffee.quantity
    }, 0)

    const getInputValue = (e) =>  {
        setEnvioValue(e.target.value)
    }
    
    return (
        <>
            <h1 className="  text-2xl text-verde w-90 h-7 flex justify-center mt-8 leading-7 font-medium gap-1">Cesta ({<p>{bagQuantity}</p>})</h1>
            <h3 className='font-semibold text-lg leading-6 m-5'>Productos</h3>

            <article className='flex '>
                <div className='flex flex-col m-6'>
                    <div className="">
                        {
                            added.length === 0 ? <p>No hay nada en la cesta</p> : added.map(coffee => <CestaProductos key={coffee.id} quantity={coffee.quantity} brand={coffee.brand} img_url={coffee.img_url} price={coffee.price} />)
                        }
                    </div>
                    <div className=''>
                        <h3 className=' font-semibold text-lg leading-6 m-5'>Seleccionar envío</h3>
                        <div className='flex'>
                            <input onChange={getInputValue} type="radio" name='tipoEnvio' value="0" className='flex gap-2 m-1' />
                            <div className='flex flex-col'>
                                <label>Envío 5-7 días</label>
                                <p >Opción estándar sin seguimiento</p>
                                <div className="border border-hovercafe w-full" > </div>
                            </div>
                            <h3 className=''>GRATIS</h3>
                        </div>
                        <div className='flex'>
                            <input onChange={getInputValue} type="radio" name='tipoEnvio' value="9" className='flex gap-2 m-1' />
                            <div className='flex flex-col'>
                                <label htmlFor="">Envío urgente 24h</label>
                                <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                            </div>
                            <h3>9,00 €</h3>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-red-100 p-6 bg-background gap-4 w-96 h-80 '>
                    <h3>Total del carrito</h3>
                    <div className="border border-hovercafe w-full" > </div>
                    <div className='flex justify-between'>
                        <p>SUBTOTAL</p>
                        <p> {subtotal} ,00 €</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>ENVÍO</p>
                        {
                            envioValue === "0" ?  <p>GRATIS</p> : <p> {envioValue + ' ,00 €'} </p>
                        }
                       
                    </div>
                    <div className="border border-hovercafe w-full"> </div>
                    <div className='flex justify-between'>
                        <p>TOTAL</p>
                        <p>{subtotal + Number(envioValue)} ,00 €</p>
                    </div>
                    
                        <p className=' flex justify-end font-normal leading-4 text-xs'> Incluye {(subtotal + Number(envioValue)) * 0.04} de IVA</p>
                        
                    <div className='flex gap-8'>
                        < Button colorbtn={"bg-verde "} colortext={"text-blanco"} textbtn={"Ir a checkout"} />
                        <Link to={'/Shop'}><p>Seguir comprando</p></Link>
                        <div />
                    </div>

                </div>
            </article>
        </>
    )

}