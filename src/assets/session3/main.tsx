import Button from "./baitap/Button"
import { FaApple,FaGoogle ,FaFacebook,FaGithub} from "react-icons/fa";
import TodolistItem from "./baitap/Todolist";
import List from "./baitap/list-cate";
import Task2 from "./baitap/task-2";
import { IoClose } from "react-icons/io5";
import ProductList from "./baitap/ProductsList";


const todos =[
    {id:1, text:"quet nha"},
    {id:2, text:"giat do"},
    {id:3, text:"naucom"}
]

const MainSession3 = () =>{
return(
  <div>
     <div className="flex flex-col gap-y-5">
     <Button icon={<FaApple />} lablel="Apple"/>
     <Button varian="outline" icon={<FaGoogle />} lablel="Google"/>
    <Button varian="outline" icon={<FaFacebook />} lablel="Facebook"/>  
    <Button varian="primary" icon={<FaGithub />} lablel="Github"/>

    
   </div>

    <div>
    <TodolistItem done={true} text="Quet nha"/>
    <TodolistItem text="Giat do"/>
    <TodolistItem text="Nau com"/>
  
    </div>
    {
        todos.map((todo, index)=>(
            <div key={index}>  
                 <TodolistItem text={todo.text}/>
          </div>
        ))
    }

    <div className="flex gap-5 justify-center text-center">
      <List image="https://tse2.explicit.bing.net/th?id=OIP.Yrn3Ga564EMVoo2-joSoNwHaFd&pid=Api&P=0&h=180" label="Hoa Hong"/>
      <List image="https://tse2.explicit.bing.net/th?id=OIP.Yrn3Ga564EMVoo2-joSoNwHaFd&pid=Api&P=0&h=180" label="Hoa Hong"/>
      <List image="https://tse2.explicit.bing.net/th?id=OIP.Yrn3Ga564EMVoo2-joSoNwHaFd&pid=Api&P=0&h=180" label="Hoa Hong"/>
    </div>

    <div className="flex ">
      <Task2 item="Angular" icon={<IoClose />}/>
      <Task2 item="Angular" icon={<IoClose />}/>

    </div>


    <div>
      <ProductList/>
    </div>
  </div>



)

  
}

export default MainSession3