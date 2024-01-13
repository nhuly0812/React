
import './App.css';
import HienThiApp from './HienThiApp.js';

//function compunent ( viết code như function, dùng thì như thẻ html)
/*Quy tắc định nghĩa 1 compunent
1. Tên cuat compunent phải viết hoa chữ cái đầu
2. Theo nguyên tắc PascalCase: ProductList
3. Luôn returrn về 1 single element, 1 thẻ duy nhất </>*/
function Avatar(){
  return <img src="https://blogcaycanh.vn/uploads/caycanh/1388107807_hoa-huong-duong.jpg" alt="" />

}

type TButton = {
  lablel?: string, //? là kh bắt buộc truyền 
}
//function compunent
    //Props
    //dùng Destructuring const {lablel} = props => sd lablel
function Button({ lablel }:TButton){
      return <button>{lablel}</button>
}
    //Cách 1 defautlProps( đưa gtri mặc định cho props)
    function Button2({ lablel = "Nhuly" }:TButton){
      return <button>{lablel}</button>
}
    //cách 2 của defautlProps
    Button.defautlProps ={
      lablel: 'Noname'
    }

    
//Arow function //function compunent
const ProductList = ()=> {
  return (
    <div className="item">
    <img src="https://blogcaycanh.vn/uploads/caycanh/1388107807_hoa-huong-duong.jpg" alt="" />
    <h3>Hoa Hướng Dương</h3>
    <strong>100.000</strong>
    </div>
  );
};

const TodolistItem = ()=>{
  return(
      <li>Lau nhà</li>
  )
}
const Todolist = ()=>{
  return(
    <ul> 
    <TodolistItem/>
    <TodolistItem/>
    <TodolistItem/>
    </ul>  
)
}

function App() {
  const textH2 = <h2>Hello Heading 2</h2>;
  const name = 'nhuly';
  const str = <p>hello {name}</p>
  const user = {
    name: 'ly',
    age:19,
  }

  return (
     <>     {/*thẻ ảo*/}
     {/** JSX css inline - double curlies{{...}}  */}
     <h1 style={{color:'red',
                backgroundColor:'pink',
                }}>Hello React</h1>
                
    {textH2}
    {str}
    {console.log('Hello JSX') }{/*viết mọi thứ js trong {} */}
    {5+5}
   <p>Tôi tên là {user.name} Tuổi {user.age}</p> 
    <HienThiApp/>
    <Avatar/> <br/>
    <Button lablel="Thêm vào giỏ hàng"/>
    <Button lablel="Tư vấn"/>
    <Button2/>
    <ProductList/>
    <Todolist/>
    </>
  )
}


//export của app.css
export default App;
