 import React, {Component} from 'react';
 import './Count.css'

//
// class Count extends Component {
//     render() {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }
//
// export default Count;

function Count({count}) {
return (
    <div className='myClass'>
    <h1>{count}</h1>
    </div>
)


}

 export default Count;