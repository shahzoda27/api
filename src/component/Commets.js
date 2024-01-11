import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Comments = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then(response=>{
            console.log(response);
            setUsers(response.data)
        })
    },[])
  return (
    <div className="container">
    <div className="row">
      <h1 className='text-center'>Comments</h1>
      <div className="col-md-10 offset-1">
             {
                users.map((item,index)=>{
                return <div key={index}>
                <h5>{item.id}</h5>
                <h6>{item.name}</h6>
                <p>{item.email}</p>
                <p>{item.body}</p>
                 </div>
                  })
              }
          
      </div>
    </div>
  </div>

  )
}

export default Comments

