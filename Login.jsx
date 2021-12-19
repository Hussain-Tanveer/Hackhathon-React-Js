import React from 'react'
import logo from "../Images/LogoKhanaSabkliye-01.png";
import "./Login.css"
import swal from 'sweetalert';
import {useState} from "react"
import vector from "../Images/vector2.jpg"
import fire from "../../Firebase";
import { useHistory } from "react-router-dom";
export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let history = useHistory();
   function signup(event){
    event.preventDefault()
    fire.auth().signInWithEmailAndPassword(email,password)
    .then((data)=>{
        swal("Login Successfully!", "You clicked the button!", "success");
        history.push("/dash");
    })
    .catch((err)=>{
        console.log(err)
    })
   }


    return (
        <div>
    


<div className="container-fluid logo-sec">
    <div className="row text-center align-items-center">
        <div className="col-md-4 head-logo">
        <img src={logo} alt="" />
        </div>
        <div className="col-md-4">
            <h1>Welcome To our Head <strong className='strong-head'>Office Section</strong> </h1>
            </div>
        <div className="col-md-4">

        </div>
    </div>

</div>

<div className="container ">
    <div className="row">
        <div className="col-md-6">
        <form onSubmit={signup}>
  <div class="mb-3 pt-5 mt-5">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(ev)=>setemail(ev.target.value)}  />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(ev)=>setpassword(ev.target.value)}  required />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        <div className="col-md-6 pt-5">
        <img class="img-fluid" src={vector} alt="" />
        </div>
    </div>
</div>
        </div>
    )
}
