import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.scss'
export default function Home() {
    const navigate = useNavigate()
    const component1 =()=>{
        navigate("/first")
    }
    const component2 =()=>{
        navigate("/second")
    }
    const component3 =()=>{
      navigate("/third")
    }
    const component4 =()=>{
      navigate("/fourth")
    }
    const component5 =()=>{
      navigate("/five")
    }
  return (
    <div className='box'>
      <div className="box-sidebar">
        <button className='btn btn-success m-5' onClick={component1}>Users</button>
        <button className='btn btn-info m-5' onClick={component2}>Post</button>
        <button className='btn btn-dark m-5' onClick={component3}>Comments</button>
        <button className='btn btn-danger m-5' onClick={component4}>Albums</button>
        <button className='btn btn-warning m-5' onClick={component5}>Todos</button>
      </div>
      <h1 className='json'>jsonplaceholder</h1>
    </div>
  )
}