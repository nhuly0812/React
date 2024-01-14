import "../style.css";

type TTitleMain={
    titleH1?:string,
    titleH2?: string,
    titleH3?: string,

}
const TitleMain=({titleH1,titleH2,titleH3}:TTitleMain)=>{
    return <div>
        <h1 className="tt tt-2">{titleH1}</h1>
        <h1 className="tt">{titleH2}</h1>
        <p className="tt tt-3">{titleH3}</p>

    </div>
}
export default TitleMain