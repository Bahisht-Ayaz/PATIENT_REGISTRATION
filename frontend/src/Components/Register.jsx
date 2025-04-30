import React, { useState } from 'react'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [age,setAge] = useState(0)
    let [gender,setGender] = useState("")
    let [contact,setContact] = useState(0)
    let [address,setAddress] = useState("")
function clear(){
    setName();
    setEmail();
    setAge();
    setGender();
    setContact();
    setAddress();
}
async function register_data (){
    try {
        let username_regex =/^[a-zA-Z0-9._-]{3,16}$/
        if (!name || !email || age === 0 || !gender || !contact || !address ){
            toast.error("All fields are required");
        }
        else if(!username_regex.test(name)){
            toast.error("Username invalid")
        }
        else {
            await axios.post("http://localhost:8002/PatientRegister/reg",{
                name:name,
                email:email,
                age:age,
                gender:gender,
                phone_no:contact,
                address:address
            })
            console.log("data save successfully")
            toast.success("Data Added Successfully")
            clear()
        }    
    } catch (error) {
        if(error.status === 409){
            toast.error("Email already exist")
        }
        else {
            toast.error(error)
            console.log(error)
        }
        
    }
}
  return (
 <div className='container'>
        <h2>Patient Registration Form</h2>
        <p>Enter your name</p>
        <input type="text" 
        placeholder='Enter your Name'
        className="form-control my-2" 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>

        <p>Enter your Email</p>
        <input type="text" 
        placeholder='Enter your email'
        className="form-control my-2" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <p>Enter your Age</p>
        <input type="number" 
        placeholder='Enter your age'
        className="form-control my-2" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>

<p>Select Gender</p>
        <select className="form-control my-3" value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="select">Choose options</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>

        <p>Enter your Phone no</p>
        <input type="number" 
        placeholder='Enter your phone no'
        className="form-control my-2" 
        value={contact}
        onChange={(e)=>setContact(e.target.value)}/>

        <p>Enter your Address</p>
        <input type="text" 
        placeholder='Enter your address'
        className="form-control my-2" 
        value={address}
        onChange={(e)=>setAddress(e.target.value)}/>

        <button className='btn btn-primary' onClick={register_data}>Register</button>
        <ToastContainer/>
    </div>
  )
}
