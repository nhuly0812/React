type TContact ={
    item2?:string,
    item3?:string,
}
const Contact =({item2, item3}:TContact)=>{
    return (
        <div className="leading-6">
         
            <li className="text-left">{item2}<br/>
                {item3}
            </li>
        </div>
    )
}
export default Contact