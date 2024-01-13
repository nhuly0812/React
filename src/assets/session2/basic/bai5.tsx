import "./bai5.css"
type TBai5 ={
    item1: string
    item2: string
    item3: string
    item4: string
    item5: string

}
const Bai5 =({item1,item2,item3,item4,item5}:TBai5)=>{
    return (
        <div className="border-2 w-60">
         <img src={item1} alt="" />
                <h2 className="contentTile">{item2}</h2>
                <span className="content contentSpan">{item3}</span>
                <p className="content contentp">{item4}</p>
                <b>{item5}</b>
        </div>
    )
}
export default Bai5