import "./bai3.css"
type TBai3Button={
    label: string
    bienthe: string
}
const Bai3Button =({label,bienthe=''}:TBai3Button)=>{
    return <button className={`button ${bienthe}`}>{label}</button>
}

export default Bai3Button