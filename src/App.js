import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Users from './component/Users'
import ModalApp from './component/ModalApp'
import Comments from './component/Commets'
import Albums from './component/Albums'
import Todos from './component/Todos'

export default function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='first' element={<Users/>}/>
      <Route path='second' element={<ModalApp/>}/>
      <Route path='third' element={<Comments/>}/>
      <Route path='fourth' element={<Albums/>}/>
      <Route path='five' element={<Todos/>}/>
     </Routes>
    </>
  )
}