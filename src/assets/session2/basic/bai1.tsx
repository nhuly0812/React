import "./bai1.css"
type TBai1={
    item:string
    styleBox?:boolean
}
const Bai1 =({item,styleBox=false}:TBai1)=>{
    const myClass = styleBox === true ? "box boxNew1" :" box boxNew2";
    return(
        <div className={myClass}>{item}</div>
    )
}

export default Bai1