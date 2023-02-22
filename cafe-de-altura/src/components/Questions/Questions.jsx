
export default function Questions({ preg, icon, text }) {

    return (
        <div className=" flex flex-col  bg-blanco m-4 rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h1 className="text-lg leading-6 font-semibold ">{preg}</h1>
                <img src={icon} alt="" />
            </div>
            <p>{text}</p>
        </div>
    )
}
