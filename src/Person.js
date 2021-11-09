import { render } from '@testing-library/react';
import React, {Component} from 'react';


// class Person extends Component{
//     render(){
//         const name = 'Lee'
//         const age = 3

//         return(
//             // <fragment>
//             <>
//                 <h3>{name}</h3>
//                 <h4>{age}</h4>
                
//             </>    
//             // </fragment>
//         )
//     }
// }
//HTML 템플릿
// function Person({country,name,age}){ //(props)대신가능
const Person = ({country,name,age})=>{ //function과 this 값이 다르다
        // const name = 'Lee'
        // const age = 3
        // const {country,name,age} = props
    return(
            <>
            <h1>{country}</h1>
            <h3>{name}</h3>
            <h4>{age}</h4>                
            </> 
    )
}

export default Person;