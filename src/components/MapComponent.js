import { useState } from "react";

const MapComponent = () => {
const [products, setProducts] = useState ([
    {id: 1, name:'celular samsung', description:'String', stock:'number'},
    {id: 2, name:'celular motorola', description:'String', stock:'number'},
    {id: 3, name:'celular apple', description:'String', stock:'number'}
])



    return ( 
    <>
    <h1>holaa</h1>
    <ul>
    {products.map((product) => (
           <li> key={product.id} product={product}</li>  
    ))}
    </ul>
    
    </>

     );
}
 
export default MapComponent;