import {products} from "../data/products";
const ProductList = () => {
  return (
    <div className="product_list flex">
        {products.map((product)=>{
            let disscount = 0;
            if(product.priceNew){
                disscount = 100 - (product.priceNew * 100)/ product.price;
            }
                return(  <div className="item">
                   {disscount > 0 ? <span>-{disscount}%</span> : null}
                <img src={product.thumb} alt="" />
                <h3>{product.name}</h3>
                {
                    product.priceNew && product.priceNew >0 ? 
                    (
                        <div className="prive">
                    <strong>{product.priceNew}</strong>
                    <del>{product.price}</del>
                        </div>
                      
                    ):(
                        <div className="prive">
                    <strong>{product.price}</strong>
                </div>
               
                    )
                }
                 </div>
                );
            }) }
    </div>
  )
    
}

export default ProductList
