type TButton ={
    lablel : string
    icon : React.ReactNode
    varian?: string
}
const Button =({lablel,icon,varian=""}:TButton)=>{
    let myStyle ="bg-slate-900 border-slate-900 text-white";
    if(varian === "outline"){
        myStyle ="bg-white text-slate-900 border-slate-900";
    }else if(varian === "primary"){
        myStyle = "bg-green-500 text-white border-green-500";
    }
    return (
        <div className={`${myStyle} item-center flex justify-center border-2 px-4 gap-x-3 py-3 rounded-full`}>
    {icon} Continue with {lablel}
        </div>
    )
}

export default Button 