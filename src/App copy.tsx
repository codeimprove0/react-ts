 
import './App.css';
import Blog from './Blog'
import Events from './Events'
import StateComp from './StateComp'
import Common from './Common'

function App() {
  let lists = [
    {
      name:'test',
      email:'test@gmail.com'
    }
  ]
  let addr = {
    city:'NA',
    pincode:12121121
  }
  let nameArray= ['A','B','C']
  return (
    <div className="App">
       <Blog name="Movie" id={117} lists={lists} address={addr} names={nameArray} styles={{color:'red'}}> 
         Hello Children Data 
         </Blog>
         <Events/>
         <StateComp/>
         <Common name="Code"/>  
        <Common flag={true}/>  
        <Common userType="SUPER-ADMIN-CUST"/>  
    </div>
  );
}

export default App;
