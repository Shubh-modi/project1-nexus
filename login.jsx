import { useRef } from "react";
import logo from './nexus-logo-2.png'
export default function Login({handleclick})
{
    let email=useRef();
    let password=useRef();

let HandleForgot=()=>{
    alert("Your password is 123456789");
}

let handleSubmit=()=>{
 if(email.current.value===""||password.current.value==="")
  {
      alert ("Fill the entries first")
  }
else {
  alert("Logged In Succesfully")
  email.current.value="";
  password.current.value="";
}
}

    return (
        <form className="container-fluid card " onSubmit={handleSubmit}>
        <div className="logo">
          {/* <h1 className="mb-3">LOGO</h1> */}
          <img src={logo} alt="logo" className="login"/>
          <h4 style={{paddingLeft: 110}}>WELCOME!!</h4>
        </div>
        <div className=" form-floating mb-2">
          <input
          ref={email}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
          ref={password}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            
          />
          <label htmlFor="floatingPassword">Password </label>
        </div>
        <a href="#" className="mb-4" onClick={HandleForgot} >Forgot Password?</a>
        <button className="btn btn-primary mb-2 button" type="submit" >LOGIN</button>
        <p>Dont't have a account? <a href="#" onClick={handleclick}>Sign Up</a></p>
      </form>
    );
}