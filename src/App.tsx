 
import './App.css'; 
import CallComp from './CallComp'    

function App() {   
  return (
    <div className="App"> 
        Code Improve
        <CallComp variant="primary" onClick={()=>console.log('clicked')} data-type="sss">
            <div>Primary Button </div>
          </CallComp>
    </div>
  );
}

export default App;
