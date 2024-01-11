import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const ModalApp = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            console.log(response);
            setUsers(response.data)
        })
    },[])
  return (
    <div className="container">
    <div className="row">
      <h1 className='text-center'>Post</h1>
      <div className="col-md-10 offset-1">
             {
                users.map((item,index)=>{
                return <div key={index}>
                <h5>{item.id}</h5>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                 </div>
                  })
              }
          
      </div>
    </div>
  </div>

  )
}

export default ModalApp

