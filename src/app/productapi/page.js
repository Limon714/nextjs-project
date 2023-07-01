import Product from "./product";
async function serverside(){
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products
}

export default async function page(){

  let product = await serverside();

  return (

    <div>
      <h1>Product Gets from API</h1>
      {
        product.map((item)=>(
            <>
           <h2>Name : {item.title}</h2>
           <Product price = {item.price} />
           
         
            </>
        ))
      }
    </div>
  )
}
