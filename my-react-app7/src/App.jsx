import './App.css'


function AllTheButtons() {


function Button1()
{
  alert('Button 1 clicked')
}

function Button2()
{
  console.log('Button 2 clicked')
}


function Button3(event) {
 
  event.target.disabled = true;
 
  event.target.textContent = 'Disabled!';
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
             <button onClick={Button3}>Click Me To Disable</button>
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