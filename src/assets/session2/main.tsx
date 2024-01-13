// import TextHello from "./bai1";
import Bai2Button from './Baitap/Bai2Button';
import Bai3Button from './Baitap/Bai3Button';
import "../session2/Baitap/bai3.css";
import Bai4Button from './Baitap/Bai4Button';
import { FaCartShopping } from "react-icons/fa6";
import Bai1 from './basic/bai1';
import Bai2 from './basic/bai2';
import Bai5 from './basic/bai5';
import Bai6 from './basic/bai6';
const MainSession2 = () => {
    return (
        <div>
            <Bai2Button/>

            <Bai3Button bienthe='button' label='Thêm vào giỏ hàng'/>
            <Bai3Button bienthe='button_new' label='Thêm vào giỏ hàng'/>

            <div className="">
           <Bai4Button icon= {<FaCartShopping/>}item='Thêm vào giỏ hàng'/>
           <Bai4Button icon= {<FaCartShopping/>}varian='outline' item='Gọi tư vấn'/>
           </div>


           <div className='flex gap-5'>
           <Bai1  item='Màu sắc'/>
           <Bai1 styleBox={true} item='Đen'/>
           <Bai1 styleBox={false} item='Hồng'/>
           <Bai1 styleBox={false} item='Xanh'/>
           </div>
          
           <div className=''>
            <Bai2 icon={<FaCartShopping/>} mainContent="Bộ sản phẩm gồm" content="Hộp, Sách hướng dẫn, Cáp, Cây lấy sim"/>
            <Bai2 icon={<FaCartShopping/>} mainContent="Bộ sản phẩm gồm" content="Hộp, Sách hướng dẫn, Cáp, Cây lấy sim"/>
            <Bai2 icon={<FaCartShopping/>} mainContent="Bộ sản phẩm gồm" content="Hộp, Sách hướng dẫn, Cáp, Cây lấy sim"/>
           </div>


           <div>
            <Bai5 item1='https://tse3.mm.bing.net/th?id=OIP.J-KDEQSk4FUgel9Vp-sUoQHaFj&pid=Api&P=0&h=180' item2='Tiêu đề' item3='Ngày 8 tháng 1' item4='Nội dung' item5='Read more'/>
           </div>

      
            <ul className="menu">
            <Bai6  bienthe='itemMenu' item='Home'/>
            <Bai6  bienthe='itemMenu' item='Blog'/>
            <Bai6  bienthe='itemMenu' item='Category'/>
            <Bai6  bienthe='itemNew' item='Product'/>
            <Bai6  bienthe='itemMenu' item='Login'/>
            </ul>
         
        </div>
    );
};

export default MainSession2;