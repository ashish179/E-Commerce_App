import React ,{useState} from 'react'
import {Link ,useHistory}  from "react-router-dom";
import {auth} from "./firebase";
import "./css/login.css";

function Login() {
 
    let error='';
    const history = useHistory();
    const [formData,setFormData]= useState({


        email:"",
        password:''
    })



    const login = (e)=> {

e.preventDefault();


auth.signInWithEmailAndPassword(formData.email,formData.password).then(auth => {
   
    console.log(auth);
    if(auth){
        history.push('/')
    }
}).catch(err => {
      error=err.message;
    console.log(err);
})


    }
    const register= (e)=> { 

       
e.preventDefault();


auth.createUserWithEmailAndPassword(formData.email, formData.password).then(auth => {
   
    console.log(auth);

    if(auth){
        history.push('/')
    }
}).catch(err => {
    error=err.message;
    console.log(err);
})
}
    return (
        <div className="login">

            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo"></img> 
            </Link>
             
                  <div className="login__container">
                       
                      <h1>Sign In</h1>
                      <form className="login__form" >

                          <h5>Email</h5>
                          <input type="email" value={formData.email}  onChange={(e) => setFormData({...formData,email:e.target.value})} />
                          <h5>password</h5>
                          <input type="password" value={formData.password}  onChange={ (e) => setFormData({...formData, password:e.target.value})}/>

                          <button className="login__signInButton" type="submit" onClick={login}>SignIn</button>
                      </form>
                      <p>you are agree to our policy</p>
                  <button className="login__registerButton" onClick={register}> create account </button>
                     
                     
                  </div>
        </div>
    )
}

export default Login
