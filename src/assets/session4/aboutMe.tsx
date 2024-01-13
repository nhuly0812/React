type TAboutMe ={
    label2 ?:string,
    date ?: string,
    content? :string,
}
const AboutMe =({label2,date,content}:TAboutMe)=>{
    return (
        <div>
            <p>{label2} {date}
            {content}</p>
        </div>
    )
}
export default AboutMe 