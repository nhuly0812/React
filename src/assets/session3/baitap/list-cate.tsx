type TList ={
    image : string,
    label:string,
}
const List = ({image,label}:TList) =>{
    return (
        <div><img className="w-20" src={image} alt="" />
            <p>{label}</p>
        </div>
    )


}
export default List