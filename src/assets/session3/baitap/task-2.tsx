type TTask2 ={
    item :string,
    icon : React.ReactNode,
}
const Task2 = ({item,icon}:TTask2) =>{
    return (
        <div className=" flex flex-row ">
            {item}{icon}
        </div>
    )
}
export default Task2