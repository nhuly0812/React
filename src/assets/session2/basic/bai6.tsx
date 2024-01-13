import"./bai6.css"
type TBai6={
    item:string
    bienthe?:string
}
const Bai6 =({item,bienthe=""}:TBai6)=>{
return (
    <div>
            <li className={`${bienthe}`}>{item}</li>
    </div>
)
}
export default Bai6