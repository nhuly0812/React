import {MyCV} from "../data/myCV"

type TExpertise = {
    name : string,
    rank: number,
}
const ItemExpertise = ({name,rank}:TExpertise)=>{
    const dots = [1,2,3,4,5];
    return(
        <li className="flex">
            <span className="name">{name}</span>
            <span className="rank flex ml-20 ">
                {
                    dots.map((dot)=>{
                       if(dot <= rank){
                        return( <span className="w-[10px] h-[10px] rounded-full bg-amber-500 block "></span>)
                       }else{
                        return(<span key={dot} className="w-[10px] h-[10px] rounded-full bg-white block"></span>)
                       
                    
                    }
                    })
                }
            </span>
        </li>
    )
}

const CvExpertise =()=>{
      return(  <div>
            <ul>
                {MyCV.exportise.map((item) =>{
                    return <ItemExpertise name={item.name} rank={item.rank}/>
                })}
                </ul>
        </div>
      )
        }
       export default CvExpertise ;