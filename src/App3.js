import './App.css';
import{Component} from 'react'
// import animals from './dummyData'
// import words from './dummyData'

class App3 extends Component {
    state = {
      count: 0,
      number:0,
      numbers:'',
      index: 0
    }
    increaseCount = () => {
      this.setState({ count: this.state.count + 1})
    }

    pickRandomNumber  = (min, max) => {
        return Math.floor( Math.random() * (max-min+1) ) + min
    }
    // setNumber = () =>{
    //     this.setState({index : this.pickRandomNumber (0,words.length-1)})
    // }

    checkDuplication = (numbers,picked) => {
        return numbers.find(num => num === picked)
    }

    showRandomNumber = () => {
        const numbers = []
        let cnt =0;
        while(numbers.length <6) {
         const picked = this.pickRandomNumber(1,45)
         const isDuplicated = this.checkDuplication(numbers, picked)
         if(isDuplicated){
           console.log('duplicated...', isDuplicated)
          // numbers.push(this.pickRandomNumber(1,45))
         }else{
           numbers.push(picked)
         }
         cnt++;
        }


        // const numbers= [0,0,0,0,0,0]
        // const picks = numbers.map(n => this.pickRandomNumber(1,45))
        this.setState( {number :this.pickRandomNumber(1,45), numbers:numbers.join('-')})
    }

    componentDidMount(){
        this.countID = setInterval(this.showRandomNumber, 1000)
      }
    // componentDidMount(){
    //     this.countID = setInterval(
    //       this.increaseCount, 1000)
    //   }
    
    // componentDidMount(){
    //   this.countID = setInterval(
    //     this.setNumber
    //   , 1000)
    // }
    /**//*pickRandomNumber*/
  
    componentWillUnmount(){
      clearInterval(this.countID)
    }
    
    render(){
    //   const { count } = this.state
      const {number,numbers} = this.state
    //   const animal = animals[count%animals.length]
    //   console.log(animal)

    // const{index} = this.state
    // const word_picked=words[index]
    // console.log(word.length,number)
    console.log(numbers)
    const cardStyle = {
        background: 'tan',
        width: '30%',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px'
    }
      return (
        <div className="App3" style={cardStyle}>
          {/* <h1>Image Gallery !</h1> */}
          {/* <h2>{count}</h2> */}
          {/* <img src={animal.src} alt={animal.title}></img> */}
          <h2>{number}</h2>
          <h3>{numbers}</h3>
          {/* <h2>{word_picked.word}</h2> */}
          {/* <h2>{word_picked.meaning}</h2> */}
        </div>
      );
    }
  }
export default App3;