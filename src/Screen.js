import Card from "./Card";
import './mycss.css';

function Screen(props) {
       const flag=props.flag;
       const setFlag=props.setFlag 
       const value=props.value
       const setValue=props.setValue
       const score=props.score;
       const setScore=props.setScore 
       const turn=props.turn
       const setTurn=props.setTurn
       const win=props.win
       const setWin=props.setWin
    return (
      <div className="Screen">
       
        <div className="myrow">
              <Card data={props.data} index={0} flag={flag} setFlag={setFlag} value={value} setValue={setValue} infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={1} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={2} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={3} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
        </div>
        <div className="myrow">
              <Card data={props.data} index={4} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={5} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={6} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={7} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
        </div>
        <div className="myrow">
              <Card data={props.data} index={8} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={9} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={10} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={11} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
        </div>
        <div className="myrow">
              <Card data={props.data} index={12} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={13} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={14} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
              <Card data={props.data} index={15} flag={flag} setFlag={setFlag} value={value} setValue={setValue}  infoarr={props.infoarr} setinfoArray={props.setinfoArray} score={score} setScore={setScore} turn={turn} setTurn={setTurn} win={win} setWin={setWin}/>
        </div>
      </div>
    );
  }
  
  export default Screen;