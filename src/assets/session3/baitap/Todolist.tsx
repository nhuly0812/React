type TTodolist={
    text:string
    done?:boolean
}
const TodolistItem = ({text, done=false}:TTodolist)=>{
    if(done === true){
       return( <li>{text} v</li>)
    }
    return <li>{text}</li>;

    // return (
    //     <li>{text}{done === true?'v':null} 
    //     {/* {text}{done && "v"} cachs 2 */}
    //     </li>
    // )
}
export default TodolistItem;
