type TButton ={
item: string;
icon?: React.ReactNode;
varian?: string;
}
const Bai3Button = ({item, icon, varian=""} :TButton)=>{
   
let myStyle = 'bg-orange-500 text-white px-10 py-3 mx-5';
if(varian === "outline"){
    myStyle = 'bg-black'
}
return <button className={`${myStyle} text-white px-10 py-3 mx-5`}>{icon}{item}</button>

   


}

export default Bai3Button