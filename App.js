
import './App.css';
import NavBar from './Component/NavBar';
function App() {

  function parentAlert(data){
    alert(data.name)
    
  }

  return (
    <div className="App">
     <>
     <h1>Lifting State Up</h1>
      <NavBar alert ={parentAlert}/>
     </>
      
    </div>
  );
}

export default App;
