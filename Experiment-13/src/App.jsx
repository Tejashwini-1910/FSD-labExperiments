import React, { useState } from "react";
import "./App.css";

function App() {

const [input,setInput]=useState("");
const [result,setResult]=useState("");

const handleClick=(value)=>{

if(value==="="){

try{
setResult(eval(input).toString());
}
catch{
setResult("Error");
}

}

else if(value==="C"){
setInput("");
setResult("");
}

else{
setInput(input+value);
}

};

const buttons=[
"7","8","9","/",
"4","5","6","*",
"1","2","3","-",
"0",".","=","+",
"C"
];

return(

<div className="calculator-container">

<h2>React Calculator</h2>

<div className="display">

<div className="input">{input}</div>
<div className="result">{result}</div>

</div>

<div className="buttons">

{buttons.map((btn)=>(
<button
key={btn}
onClick={()=>handleClick(btn)}
className={`button ${btn==="="||btn==="C"?"operator":""}`}
>

{btn}

</button>
))}

</div>

</div>

);

}

export default App;