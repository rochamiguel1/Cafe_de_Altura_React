

import React, { useContext } from 'react'
import { ProductsContext } from '../../App'
import menos from "../../assets/iconMinus.png"
import mas from "../../assets/iconPlus.png"


export default function CestaProductos({ quantity, img_url, brand, price }) {



    const { added, setAdded } = useContext(ProductsContext)

    const decreaseClick = () => {
        setAdded(prev => {
            const newPrev = [...prev] // se declara nuevo array con la cantidad inicial
            const index = newPrev.findIndex(coffee => coffee.brand === brand) //el valor de index es: busca en el array newPrev y devuelveme el elemento(coffee).brand  que sea igual a "brand" que se paso por props
            newPrev[index].quantity -= 1 // muestra la cantidad que en el arreglo actualizada
            // si la cantidad del array es menor o igual a 0 retorna el array con la cantidad de elementos actual
            if (newPrev[index].quantity <= 0) {
                return newPrev.filter(coffee => coffee.quantity != 0)
            }
            return newPrev
        })
    }

    const increaseClick = () => {
        setAdded(prev => {
            const newPrev = [...prev]
            const index = newPrev.findIndex(coffee => coffee.brand === brand)
            newPrev[index].quantity += 1
            console.log(newPrev[index].quantity);
            return newPrev
        })


    }
    return (

        <div className='flex gap-4 justify-center items-center m-2'>
            <img onClick={decreaseClick} className='h-6 w-6 cursor-pointer' src={menos} alt="" />
            <span >{quantity}</span>
            <img onClick={increaseClick} className='h-6 w-6 cursor-pointer' src={mas} alt="" />
            <img src={img_url} alt="" className=' flex r h-18 w-24' />
            <div className='flex gap-64'>
                <div className=''>
                    <p className='text-sm leading-4 font-semibold text-negro'>{brand}</p>
                    <p className='text-sm leading-4 font-normal text-negro'>Paquete de café, 250 gr</p>
                </div>
                <p >{price * quantity},00 €</p>
            </div>
            
        </div>
    )
}


