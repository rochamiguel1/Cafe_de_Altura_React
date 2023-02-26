import { useState } from "react"

export default function Questions({ preg, icon, text }) {

    const [hiddenText, setHiddenText] = useState(true)

    const handleClick = () => {
        setHiddenText(prev => !prev)
    }
    return (
        <div className=" flex flex-col  bg-blanco m-4 rounded-lg p-6  ">
            <div onClick={handleClick} className="flex justify-between items-center p-2">
                <h1 className="text-lg leading-6 font-semibold">{preg}</h1>
                <img src={icon} alt="" className={`flex justify-between items-center w-2 h-1 ${hiddenText ? '' : 'rotate-180'}`} />
            </div>
            <div className={`border border-bg-contact w-full ${hiddenText ? '' : 'hidden'} `} > </div>
            <div className={`p-2 text-xs font-normal leading-4 ${hiddenText ? '' : 'hidden'}`} >
                <p>{text}</p>
            </div>
        </div>
    )
}
