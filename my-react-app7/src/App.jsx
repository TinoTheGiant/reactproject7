import './App.css'
import { useState } from 'react';

function AllTheButtons() {


function Button1()
{
  alert('Button 1 clicked')
}

function Button2()
{
  console.log('Button 2 clicked')
}


const [isButton3Disabled, setIsButton3Disabled] = useState(false);
const [button3Text, setButton3Text] = useState("Click Me To Disable");

function Button3()
{
  setIsButton3Disabled(true);
  setButton3Text("Disabled!");
}



  
function Button4()
{
  alert('Button 4 Double Clicked!')
}  
  

  return (
    <div>
             <h1> More Options, More Problems </h1>
             <button onClick={Button1}>Alert Me</button>
             <button onClick={Button2}>Console Log Me</button>
             <button onClick={Button3} disabled={isButton3Disabled}>{button3Text}</button>
             <button onDoubleClick={Button4}>Double Click To Alert</button>
    </div>
    
);


}

export default function App() {
  return (
    <div>
      <AllTheButtons />
    </div>
  )
}