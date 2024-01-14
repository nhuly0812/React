type TTitle={
    lable: string,
    bienthe?: string,
}
const Titles =({lable,bienthe=""} :TTitle)=>{
    if(bienthe == 'bl'){
        return <h2 className="py-8 text-black font-bold" >{lable}</h2>
    }else{
        return <h2 className="py-8  text-white font-bold " >{lable}</h2>
    }
}
export default Titles