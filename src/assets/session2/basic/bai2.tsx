import "./bai2.css";
type TBai2 ={
    icon:React.ReactNode
    mainContent:string
    content:string
    bienthe?: string
}
const Bai2 =({icon,mainContent,content,bienthe=""}:TBai2)=>{
    return <div className={`${bienthe}`}>
        {icon} <span className="font-bold">{mainContent}</span> <p className="text-gray-400">{content}</p>
    </div>
}

export default Bai2