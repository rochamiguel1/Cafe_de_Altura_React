
export default function Button ({colorbtn ,colortext, textbtn}){
return (

    <button className={`rounded py-3 px-6 font-semibold text-sm ${colorbtn} ${colortext} `}> {textbtn} </button>
)

}