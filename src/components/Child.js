import React,{useState} from 'react'

let Child= (props)=>{
    function chanegstate(event){
        event.preventDefault()
        props.set(true)
    }
return(
    <form onSubmit={chanegstate}>
        <label>Username:</label>
        <input type='text' required></input><br></br>
        <label>Password:</label>
        <input type='password' required></input>
        <button>Login</button>
    </form>
)
}
export default Child