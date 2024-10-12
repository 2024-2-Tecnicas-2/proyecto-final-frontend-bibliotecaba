let num = 2;
function App() {
  ////Estado

const sumar = ()=>{

  num +=1;
  console.log(num); 


}

  //ciclo de vida
  ///jsx
  return (
      <div className="App">
        <button onClick={sumar}>+1</button>
        <p>{num}</p>

        </div>
    
  
  )
}

export default App
