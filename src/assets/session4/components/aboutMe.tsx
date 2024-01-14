type TAboutMe ={
    label2 ?:string,
    date ?: string,
    content? :string,
}
const AboutMe =({label2,date,content}:TAboutMe)=>{
    return (
        <div>
         <div className="flex leading-10">
            <div className="flex-row text-gray-400 font-bold ">{label2} </div>
            <div className="flex-row justify-items-end text-gray-400 ml-72">{date}</div>
         </div>
          <div className=" text-gray-400 "> {content}</div>
        </div>
    )
}
export default AboutMe 