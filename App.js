// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./login";
import Signup from "./signup";
import { useState } from "react";

function App() {
  let [page,setpage]=useState("login");
  let handleclick=()=>
    {
       console.log("hi");
       if( page==="login")setpage("signup");
       else setpage("login");
       
    }
  return (
    <div className="body">
     {page==="login"?<Login handleclick={handleclick}></Login>:<Signup handleclick={handleclick}></Signup>};

    </div>
  );
}

export default App;
 