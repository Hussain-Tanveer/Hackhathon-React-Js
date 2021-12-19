import React from 'react'
import logo from "../Images/LogoKhanaSabkliye-01.png";
import { useState,useEffect } from 'react';
import fire from "../../Firebase"
export default function Dashboard() {
    function render(){
        fire.firestore().collection("needyPerson").get()
           .then( async (querySnapshot) => {
               await Promise.all(querySnapshot.docs.map( async (doc) => {
                   const stuffData = doc.data()
                   stuffData.id = doc.id
                   console.log("doc.id => ",doc.data())
                   var obj = ("doc.id => ",doc.data())
                 
            fire.storage()
           .ref()
           .child('image'+ obj.uid)
           .getDownloadURL()
           .then((url)=>{
              document.getElementById("render").innerHTML += `
               <div class="card" style="width: 18rem;">
               <img style="height:200px" src=${url} class="card-img-top" alt="">
               <div class="card-body">
                 <h5 class="card-title">${obj.name}</h5>
                 <p class="card-text">Father name: ${obj.fname}</p>
                 <p class="card-text">CNIC number: ${obj.cnic}</p>
                 <p class="card-text">Date of Birth: ${obj.dob}</p>
                 <p class="card-text">Phone Number: ${obj.number}</p>
                 <p class="card-text">Monthly income: ${obj.income}</p>
                <button class="btn btn-dark">Accept</button>
                <button class="btn btn-dark">Reject</button>
               </div>
               </div>
   
               `
               console.log(url)
         
           })
                   return stuffData
           }));
       })
         
   }
       useEffect(() => {
        render()
       },[]);
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

<div className="container-fluid">
    <div className="row text-center justify-content-center " id="render">
      
    </div>
</div>

        </div>
    )
}
