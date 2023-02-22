

const ConditionCard = ({ icon, text1, text2}) => {
    return <div className='bg-blanco flex flex-col justify-center items-center p-8 gap-4 rounded-md'>
        <img src={icon} alt="" className="bg-verde rounded-2xl p-3 h-16 w-16" />
        <h3 className="text-base font-semibold h-6 w-64">{text1}</h3>
        <p className="text-sm w-64 h-16 leading-4">{text2}</p>
    </div>
}

export default ConditionCard