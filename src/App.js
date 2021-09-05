import './App.css';
import Display from './Display';
import {useState,useEffect} from 'react'

function App() {
 
  const [score,setScore]=useState();
  const [turn,setTurn]=useState();  
  const [arr,setArray]=useState();
  const [flag,setFlag]=useState(0);
  const [infoArr,setinfoArray]=useState();
  const [flag2,setFlag2]=useState(0);
  const [value,setValue]=useState(-1);

  useEffect(()=>{
    window.onbeforeunload = () => true
  })

  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  const setUp=()=>{
    setFlag(1);
    const myarr=['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H'] ;
    var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    shuffle(arr);
    for(let i=0;i<16;i++)
    {
      arr[i]=myarr[arr[i]]
    }
    const myinfo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    setArray(arr);
    setinfoArray(myinfo);
    setScore(0);
    setTurn(0);
    setScore(0);
    setTurn(0);
  }

  return (
    <div className="App">
      {
        flag?  <Display data={arr} infoarr={infoArr} setinfoArray={setinfoArray} flag={flag2} setFlag={setFlag2} value={value} setValue={setValue} score={score} setScore={setScore} turn={turn} setTurn={setTurn}  end={setFlag}/>:<button className="mybutton" onClick={setUp} > Play</button> 
      }
    </div>
  );
}

export default App;
