import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ShowData() {
    let [userdata,setUserData] = useState([])
    useEffect(()=> {
        datalao()
    },[])
    async function datalao() {
        await axios.get("http://localhost:8002/PatientRegister/user")
        .then((abc)=> {
         console.log(abc.data)
         setUserData(abc.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div className='container'>
     <h1>Patient Data </h1>
     <hr />
     <table className=" table table-light">
                    <thead>
                        <tr>
                            <th className='table-dark'>Name</th>
                            <th className='table-dark'>Email</th>
                            <th className='table-dark'>Age</th>
                            <th className='table-dark'>Gender</th>
                            <th className='table-dark'>Phone no</th>
                            <th className='table-dark'>Address</th>
                        </tr>
                    </thead>
                    <tbody>
        
     {   userdata.map((a)=>(
          
               
                        <tr class="">
                            
                            <td>{a.name}</td>
                            <td>{a.email}</td>
                            <td>{a.age}</td>
                            <td>{a.gender}</td>
                            <td>{a.phone_no}</td>
                            <td>{a.address}</td>
                        </tr>
                
            
        ))
        }
            </tbody>
            </table>
     </div>
  )
}