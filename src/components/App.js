
import React,{useState} from "react";
import './../styles/App.css';
import Child from './Child'
const App = () => {
  let [isLoggedIn,SetisLoggedIn]=useState(false)
  return (
    <div> 
      <h1>Parent Component</h1>
        {isLoggedIn==false ? <Child set={SetisLoggedIn}/> : <p>You are logged in!</p> }
    </div>
  )
}

export default App
