import React, { Component } from 'react'; 

// class Todo extends Component {
function Todo({user,name,done,description}){  
    //초기 데이터
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         name: "cleaning", 
    //         done: false, 
    //         description: "cleaning my room on weekends" }  
    // }
    

    // //이벤트 핸들러 함수
    // changeTodoName =() =>{
    //     console.log(this)
    //     this.setState({name: " learning react"})
    // } 

    // render(){// 데이터 선언 
    //     const{name,done,description} = this.state
    //     // const{user} = this.props
    //     // HTML 템플릿 
        return ( 
        <> 
            <h2>user: {user}</h2>
            <h3>name: {name} </h3> 
            <h4>done: {done? "finished": "Null"}</h4> 
            <p>description: {description}</p> 
            {/* <button type = "button" onClick={this.changeTodoName}>할일 이름 바꾸기</button> */}
            <button type = "button">할일 이름</button>
        </> 
        )
    }
 
export default Todo;
