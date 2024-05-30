
import React, { useState } from "react";

function Logings() {
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [pswdErr, setPswdErr] = useState(false);

  function loginHandle(e) {
    if (user.length < 3 || pswd.length <3) {
      alert("plz enter valoid id paswd");
    } else {
      alert("all good ;)");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item =e.target.value;
    if(item.length<3){
      setUserErr(true)
    }
    else{
      setUserErr(false)
    }
    setUser(item)
  }
  function pswdHandler(e){ 
    let item =e.target.value;
    if (item.length<3){
      setPswdErr(true)
    }
    else {
      setPswdErr(false)
    }
    setPswd(item)
  }

  return (
    <form onSubmit={loginHandle}>
      <input type="text" placeholder="Plz enter your name" onChange={userHandler} />{userErr? <span>User id not valid</span> 
      :""} 
      <br />
      <br />
      <br />
      <input type="password" placeholder="Plz enter the password"  onChange={pswdHandler}/>{pswdErr? <span>Password not valid</span>:""}
      <br />
      <br />
      <button> submit</button>
    </form>
  );
}

export default Logings;
