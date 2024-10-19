import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClicked() {
    alert("button Clicked");
  }

  const handleClicked2 = () =>{
    alert("button click 2")
  }
  const addFive = (num) => {
    alert(num+5);
  }

  return (
    <>
      <h2>React Core Concepts</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClicked}>Click me</button>
      <button onClick={function(){
        alert("THis text is from onclick 2");
      }}>Click two</button>
      <button onClick={()=>{alert("This is from click third")}}>Click third</button>

      {/* Vhejailla jinish */}
      <button onClick={()=> addFive(3)}>Add five</button>
      </>
  )
}

export default App
