import React, { useState } from 'react';

function App() {
  const[letsSwap,setLetsSwap]=useState(false);
  const [count2, setCount] = useState(0);

const a="Goodbye";
const miniJSX= "I am Groat!";
let count=0;
const handleClick=()=>{

// setLetsSwap(l(prewSwap=>!prewSwap));

setLetsSwap(letsSwap?false:true);


  // if(letsSwap){
  //   setLetsSwap(false);
  // }else {setLetsSwap(true);}
  // console.log("Clicked");
}
const counter=()=>{


count++;
console.log(count);



}
const counter2=()=>{


  count--;
  console.log(count);
  
  
  
  }



  return (
 <><div>
      {letsSwap?a:miniJSX} React

    </div>
    <br></br>

      {letsSwap?miniJSX:a}

      <br></br>
     <button onClick={handleClick}>swap</button>
<br></br>
<br></br>
     <button  onClick={counter}>Plus</button>
     <br></br>

     <button onClick={counter2}>Minus</button>

<br></br>
<br></br>
     <button onClick={() => setCount(count2 - 1)}>Minus</button>

      {count2}
			 <button onClick={() => setCount(count2 + 1)}>Plus</button>

      </>
  );
}

export default App;
