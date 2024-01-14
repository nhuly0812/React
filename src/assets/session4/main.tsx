import AboutMe from "./components/aboutMe";
import CvExpertise from "./components/Expertise";
import Contact from "./components/contact";
import Titles from "./components/titles";
import TitleMain from "./components/titleMain";
import "./style.css";
const MainSession4 = ()=>{
    return (

           <div  className=" mx-auto flex w-5/6 justify-center bg-blue-900 text-white p-10">
           <div className="contentRight">
                 {/* CONTACT */}
                 <div className="divimg">
                 <img className="image" src="https://bizweb.dktcdn.net/100/301/794/files/tiem-anh-mau-sieu-toc-phuong-321041.jpg?v=1615432941061" alt="" />
                 </div>
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


            <div className="contentLeft ">
                <TitleMain titleH1="AMANDA"/>
                <TitleMain titleH2="CASSIE"/>
                <TitleMain titleH3="WEB DEVERLOPER"/>

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
export default MainSession4