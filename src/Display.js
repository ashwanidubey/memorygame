import Matches from "./Matches";
import Turns from "./Turns";
import Screen from "./Screen";
import {useState} from 'react'
import './App.css';
import './mycss.css';
function Display(props) {
  const [win,setWin]=useState(0);
    return (
      <div className="Display">
        <div className="Displayin">
        <Screen data={props.data} infoarr={props.infoarr} setinfoArray={props.setinfoArray} flag={props.flag} setFlag={props.setFlag} value={props.value} setValue={props.setValue} score={props.score} setScore={props.setScore} turn={props.turn} setTurn={props.setTurn} win={win} setWin={setWin}/>
        </div>
        
        <div className="Displayin">
        {win?<><h1>you won the match</h1></>:<h1></h1>}
        <Turns turn={props.turn} setTurn={props.setTurn}/>
        <Matches score={props.score} setScore={props.setScore} />
        {win?<><button onClick={()=>{props.end(0)}}>REPLAY</button></>:<h1></h1>}
        </div>
       
      </div>
    );
  }
  
  export default Display;