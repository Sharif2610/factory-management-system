/*import lib from "../images/library.jpg";
import '../css/ImageComponent.css';
function ImageComponent(){
    return (
        <div className="imagecomponent">
            <img src= {lib} alt="" />
        </div>
    );
}
export default ImageComponent;*/
import lib from '../images/library.jpg'
import '../css/ImageComponent.css';
import { useState } from 'react';
function ImageComponent(){
    return (
        <div className='imagecomponent'>
            <img src={lib} alt="" />
        </div>
    );
}
export default ImageComponent;