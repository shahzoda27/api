import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            console.log(response);
            setUsers(response.data)
        })
    },[])
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-10 offset-1">
      <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Address(City)</th>
              <th>Company (Name)</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.address.city}</td>
                <td>{item.company.name}</td>
                
              </tr>
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  </div>

  )
}

export default Users

