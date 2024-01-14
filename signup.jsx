import { useRef} from "react";

export default function Signup({handleclick}) {

  let name=useRef();
  let email=useRef();
  let password=useRef();
  let confirm=useRef();
  let check=useRef();

let handleSubmit=()=>{
    if(    password.current.value!==confirm.current.value)
    {
        alert("Password is not matching");
    }
    else if(check.current.checked===false||name.current.value===""||email.current.value===""||password.current.value===""||confirm.current.value==="")
    {
        alert ("Fill the entries first")
    }
else {
    alert("Signed Up Succesfully")
    name.current.value="";
    email.current.value="";
    password.current.value="";
    confirm.current.value="";
    check.current.checked=false;
}
}


  return (
    <form className="container-fluid card signup" onSubmit={handleSubmit}>
      <div className="logo">
        {/* <h1 className="mb-3">LOGO</h1> */}
        <h1 style={{paddingTop: 30,paddingLeft: 100,fontWeight:'bold'}}>SIGN UP</h1>
      </div>

      <div className="form-group mb-2 ">
        <label htmlFor="Name">Full Name</label>
        <input
        ref={name}
          type="text"
          className="form-control"
          id="Name"
          placeholder="Full Name"
        />
      </div>
      <div className="form-group mb-2 ">
        <label htmlFor="inputEmail4">Email</label>
        <input
        ref={email}
          type="email"
          className="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>
      <div className="form-group mb-2 ">
        <label htmlFor="inputPassword4">Password</label>
        <input
        ref={password}
          type="password"
          className="form-control"
          id="inputPassword4"
          placeholder="Password"
        />
       
      </div>

      <div className="form-group mb-3 ">
        <label htmlFor="inputPassword">Confirm Password</label>
        <input
        ref={confirm}
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Confirm Password"
        />

      </div>
      <div className="form-group row mb-4">
        <div >
          <div className="form-check">
            <input ref={check} className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              I accept the Terms of Use & Privacy Policy
            </label>
          </div>
        </div>
      </div>
     
      <button className="btn btn-primary mb-2" type="submit" >
        Sign Up
      </button>
      <p>
        Already have a account? <a href="#" onClick={handleclick}>Login</a>
      </p>
    </form>
  );
}
