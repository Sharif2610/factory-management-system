import { useRef, useState } from 'react';
import '../css/AddToCart.css';
function AddToCart(){
    let [cart,setCart] = useState([]);
    let inputRef = useRef();
    let addtocart = ()=>{
        let item;
        item = inputRef.current.value;
        setCart([...cart,item])
        console.log(cart);
    }
    let removeitem = (it)=>{
            let output = cart.filter((item)=>{
                return item != it
            })
            setCart(output);
    }
    return (
        <div className="addtocart">
            <input type="text" ref={inputRef}/>
            <button onClick={addtocart}>Add</button>
            <ul>
                {
                    cart.map((fruit)=>{
                        return <><li>{fruit}</li><button onClick={()=>removeitem(fruit)}><strong>X</strong></button><br /></>
                    })
                }
            </ul>
        </div>
    );
}
export default AddToCart;