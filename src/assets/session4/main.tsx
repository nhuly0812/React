import AboutMe from "./aboutMe";
import CvExpertise from "./components/Expertise";
import Contact from "./contact";
import Titles from "./titles";


const MainSessinon4 = ()=>{
    return (

           <div  className=" mx-auto flex w-5/6 justify-center bg-blue-900 text-white p-10">
           <div className="contentRight w-80 bg-blue-900 justify-center pl-16 pb-10 shadow-2xl">
                 {/* CONTACT */}
                 <img className="w-40 h-36 rounded-full mt-10 mr-10" src="https://bizweb.dktcdn.net/100/301/794/files/tiem-anh-mau-sieu-toc-phuong-321041.jpg?v=1615432941061" alt="" />
        <Titles lable="CONTACT" />         
        <Contact item2="Phone" item3="+9033984774747"/>
        <Contact  item2="Email" item3="youremail.@gmail.com"/>
        <Contact  item2="Address" item3="Distric,City-Country"/>
        <Titles lable="EXERTISE"/>
        <div className="flex">
        <div className="">
        <CvExpertise/>
        </div>
    </div>
        {/* PERSONAL SKILL */}
        <Titles lable="PERSONAL SKILL"/>         
        <Contact item2="Public Speaking"/>
        <Contact item2="Financial Managament"/>
        <Contact item2="Creative Idea"/>
        <Contact item2="Project Manager"/>
        <Contact item2="Directer"/>
            </div>


            <div className="contentLeft w-3/5 bg-white text-black p-10">
            <Titles lable="ABOUT ME" bienthe="bl"/>         
                <AboutMe content="Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted ,Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted,Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted"/>
                <div>
                <Titles lable="EDUCATION" bienthe="bl"/>         
                 <AboutMe label2="BACHELO OF DESIGN" date="2012-2015" content="University/Collage/Institute"/>
                <AboutMe  label2="BACHELO OF DESIGN" date="2012-2015" content="University/Collage/Institute"/>
                </div>
                <div>
                <Titles lable="WORK EXPERIENCE" bienthe="bl"/>         
                    <AboutMe label2="Job TITLE COMPANY NAME" date="2012-2015" content="Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted ,Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted"/>

                    <AboutMe label2="Job TITLE COMPANY NAME" date="2012-2015" content="Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt for human rights have resulted"/>

                </div>
            
            </div>
            

           
           </div>
        
    )
}
export default MainSessinon4