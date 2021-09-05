import './mycss.css';
function Card({data,index,infoarr,setinfoArray,flag,setFlag,value,setValue ,score,setScore,turn,setTurn,win,setWin}) {
  const myfun=()=>{
    //let duplicate=[...infoarr]
    //console.log(flag)
    //console.log("clicked")
        if(infoarr[index]>0)
          return ;
     //console.log("enter")      
         if(flag===0)
         {
            setValue(index);
            infoarr[index]=1;
            //flag=1;
            setFlag(1);
            console.log("flag o")
         }
         else if(flag===1)
         {
            //flag=2;
            setFlag(2)
            setTurn(turn+1);
            infoarr[index]=2;
            //console.log("flag 2")
            if(data[value]===data[index])
            {
             
              infoarr[index]=3;
              infoarr[value]=3;
              setValue(-1);
              setScore(score+1);
              setFlag(0);
              console.log(score)
              if(score===7)
              {
                setWin(1);
                console.log(win)
              }
            }
            else
            {
              infoarr[index]=2;

              setTimeout(function(){ 
                infoarr[index]=0;
                infoarr[value]=0;
                setValue(-1);
                setFlag(0);
              }, 500);
              
            }
         }
        // console.log(flag)
  }
    return (
      <div className="Card">
        {
          infoarr[index]? infoarr[index]===3?<div className="Cardinside1"><h1>{data[index]}</h1></div> :<div className="Cardinside2"><h1>{data[index]}</h1></div>: <div className="Cardinside2"><button className="clickButton" onClick={myfun}></button></div>
        }
       
      </div>
    );
  }
  
  export default Card;