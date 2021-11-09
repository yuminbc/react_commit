// import logo from './logo.svg';
// import './App.css';
// import Book from './book/Book';

// function App() {
//   const book ={
//     title :"title" ,
//     author:"author" ,
//     summary:"summary" ,
//     genre:"genre",
//     release:"release",
//     ISBN:123456
//   }
//   return (
//     <div className="App">
//       {/* <Person country ="korea" name="Lee" age="234"></Person> */}
//       <Book 
//       title ={book.title} 
//       author={book.author}
//       summary={book.summary}
//       genre={book.genre}
//       release={book.release}
//       ISBN={book.ISBN}
//       ></Book>
//     </div>
//   );
// }

// import NameTag from './NameTag' 
// import Counter from './Couter'
// import React,{Component} from 'react';

// function App() { 
//   return ( 
//     <div className="App"> 
//       <Counter></Counter>
//     </div> 
//     ); 
//   }

// class App extends Component{
//   state = {
//     name:'parent'
//   }
//   changeName=()=>{
//     this.setState({name:"parent changed"})
//   }
//   render(){
//     console.log('parent')
//     const{name}= this.state
//     return(
//       <div className="App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>change name</button>
//         <Counter></Counter>
//       </div>
//     )
//   }
// }
// import logo from './logo.svg'; 
// import './App.css'; 
// import YoutubeVideo from './YoutubeVideo' 
// import dummyData from './dummyData';
// function App() { 
  // return ( 
    // <div className="App"> 
    // {dummyData.map(d=>{
    //   return(
    //   <YoutubeVideo 
    //                 key={d.videoId}
    //                 videoId={d.videoId}
    //                 videoName={d.videoName} 
    //                 videoLength={d.videoLength}
    //                 videoDescription={d.videoDescription}
    //   >
    //     <iframe width="560" height="315" src="https://www.youtube.com/embed/iMmWJ4CwwiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //   </YoutubeVideo> 
    // )}
    // )}
    //  </div> 

    //  ); 
// }

// import React from 'react'
// import logo from './logo.svg';
// import './App.css';

//     function App(){
//       const name="syleemomo"
//       const changeName = (name) => {
//         return `Hello, ${name}`
//       }
//       return(
//         <div className="App">
//           <div>{changeName(name)}</div>
//         </div>
//       );
//     }
    
    
// import React from 'react' 
// import logo from './logo.svg'; 
// import './App.css'; 
// function App() { 
//   const person = { 
//     name: "syleemomo", 
//     age: 3 } 
//   return ( 
//   <div className="App"> 
//   {/* <div>{person.name? "your name is nice !": "name doesn't exist !"} - {person.age}</div>  */}
//     <div>{
//       person.name?
//       <h1>Your name is nice!</h1> : <h1>"name doesn't exost !"</h1>
//     } - {person.age}</div>
//   </div> 
//   ); 
// }

// import React from 'react' 
// import logo from './logo.svg'; 
// import './App.css'; 
// function App() { 
//   const loading = { 
//     state: false } 
//     if(!loading.state){ 
//       return <h1>This is Laoding page</h1> 
//     }else{ 
//       return <h1>This is Home page</h1> 
//     } 
//   }

// import React from 'react' 
// import logo from './logo.svg'; 
// import './App.css'; 

// function App() { 
//   const loadingPage = ( 
//   <div> 
//     <h1>Loading page</h1> 
//   </div> 
//   ) 
//   const homePage = ( 
//   <div> 
//     <h1>Home page</h1> 
//   </div> 
//   ) 
//   const loading = { 
//     state: true 
//   } 
//   if(!loading.state){ 
//     return loadingPage 
//   }else{ 
//     return homePage 
//   } 
// }

// import React from 'react' 
// import logo from './logo.svg'; 
// import './App.css'; 
// function App() { 
//   return ( 
//     <> 
//       <h1>hello</h1> 
//       <p>nice to meet you !</p>
//     </> 
//   ) 
// }

// import './App.css'; 
// import React, { Component } from 'react'

 
// class App extends Component { 
//   state = { count: 0 } 
//   showUI = (cnt) => { 
//     let ui = null; 
//     switch(cnt){ 
//       case 0: ui = <h1>Home</h1>
//         break; 
//       case 1: ui = <h1>About</h1> 
//        break; 
//       case 2: ui = <h1>Detail</h1> 
//         break; 
//       default: ui = <h1>NotFound</h1> } 
//         return ui 
//       } 
//       increase = () => { 
//         this.setState({count: this.state.count + 1}) } 
//         render(){ const { count } = this.state 
//         return ( 
//           <> 
//             {this.showUI(count)} 
//             <button type="button" onClick={this.increase}>카운팅</button> 
//           </> 
//         ) 
//       } 
//     }
// import './App.css'; 
// import React, { Component } from 'react';
// import words from './kor_dic_coll.json';


// const App = ()=>{
//   const itemStyle={
//     width: '100%',
//     /* height: 300px; */ 
//     marginbottom: '50px',
//     paddingLeft: '10px',
//     background: 'rgb(235, 236, 228)',
//     display: 'inline-block', /* 컬럼 짤림 방지*/
//     textAlign:'left',

//   }
//   // words.style.textAlign="right"
//   return ( 
//     <div className="App">
//       {words.map(word=>{
//         return(
//           <> 
//           <div class="item" style={itemStyle}>
//             <div class="word">
//                 <pre><p><a href = "{word.r_link}" target="_blank">{word.r_word}</a> {word.r_seq? word.r_seq:""}</p></pre>
//                 <pre><a class="r_chi">{word.r_chi}</a><a class = "r_pos">{word.r_pos}</a></pre>
//             </div>         
//             <p class="r_des">{word.r_des}</p>
//           </div>  
//           </>
//         )
          
//       })}
//     </div> 
//   ) 
  

// }

// function App(){
//   return ( 
//     <div className="App">
//       {words.map(word=>{
//         return(
//           <> 
//           <div class="item">
//             <div class="word">
//                 <pre><p><a href = "{word.r_link}" target="_blank">{word.r_word}</a> {word.r_seq? word.r_seq:""}</p></pre>
//                 <pre><a class="r_chi">{word.r_chi}</a><a class = "r_pos">{word.r_pos}</a></pre>
//             </div>         
//             <p class="r_des">{word.r_des}</p>
//           </div>  
//           </>
//         )
          
//       })}
//     </div> 
//   ) 
// } 

// import './App.css';  
// import React, { Component } from 'react'; 
// class App extends Component { 
//   constructor(props){ 
//     console.log('constructor') 
//     super(props) 
//     this.state = { 
//       name: "syleemomo" 
//     } 
//   }  
//   changeName = () => { 
//     this.setState({name: "name changed"}) 
//   } 
//   componentDidMount(){ 
//     console.log('mount') 
//     console.log('----------') 
//   } 
//   componentDidUpdate(){ 
//     console.log('update') 
//   } 
//   componentWillUnmount(){ 
//     console.log('unmount') 
//   } 
//   render(){ 
//     console.log('render') 
//     const {name} = this.state 
//     return ( 
//       <div className="App"> 
//         <h1>{name}</h1> 
//         <button onClick={this.changeName}>Change name</button> 
//       </div> 
//     ) 
//   } 
// } 
// export default App;


import './App.css'; 
import React, { Component } from 'react'; 
import Movie from './Movie'; 
class App extends Component { 
  constructor(props){ 
    super(props) 
    this.state = { 
      loading: true, 
      movies: [] 
    } 
  } 
  componentDidMount(){ 
    fetch('https://yts.mx/api/v2/list_movies.json?limit=12') 
    .then( res => res.json()) 
    .then( result => { 
      const {data: {movies}} = result 
      console.log(movies) 
      this.setState({loading: false, movies}) 
    }
    ) 
  } 
  render(){ 
    const {loading, movies} = this.state 
    const style = { 
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '60%',
      margin: '100px auto', 
      textAlign: 'center' 
    } 
    const loadingStyle = { 
      position: 'absolute', 
      left: '50%', 
      top:'50%', 
      transform: 'translate(-50%, -50%)',
      fontSize: '2rem' 
    } 
      if(loading){ 
        return ( 
        <div style={loadingStyle}> 
        <h1>Loading ...</h1> 
        </div> 
        ) 
      }
      else{ 
        return ( 
          <div style={style}> 
          {movies.map(movie => {
            return ( 
              <Movie 
                key={movie.id} 
                title={movie.title} 
                genres={movie.genres} 
                cover={movie.medium_cover_image} 
                summary={movie.summary}
              ></Movie> 
            )     
          })} 
          </div> 
        ) 
      } 
    } 
  } 
export default App;

