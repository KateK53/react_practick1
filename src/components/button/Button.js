import React, {Component} from 'react';
import Count from "../count/Count";

function Button({myFunc}) {


    const myClick = ()=>{
        myFunc()
        // console.log('props');
        // console.log(props);
        console.log('click');
};
    return (
        <div>
    <button onClick={myClick}>ADD1</button>
        </div>
    )


}

export default Button;