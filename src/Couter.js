import React, { Component } from 'react'; 

class Counter extends Component{ 
    state = { count: 0 }
    
    increase = () => { 
        const {count} = this.state 
        console.log(`before updating state: ${count}`) 
        this.setState({count: count + 1}) 
        console.log(`after updating state: ${count}`) 
    }
    // increaseMultiple = () => { 
    //     // ------------ 업데이트 되지 않는 구간 -----------------// 
    //     this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1) 
    //     this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1) 
    //     this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1) 
        
    //     console.log(`right after event: ${this.state.count}`)
    //      // ----------------------------------------------------// 
    // }
    
    render(){ 
        console.log('child')
        // console.log('counter')
        const {count} = this.state 
        console.log(`state in render function: ${count}`) 
        return ( 
            <> 
                <h1>{count}</h1> 
                <button type="button" onClick={this.increase}>increase count</button> 
            </> 
        ) 
    } 
} 
export default Counter;

