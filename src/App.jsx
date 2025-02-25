import './App.css'
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound'
import NavigationBar from './Components/NavBar'
import React, { Suspense } from 'react'

function App() {
  const Events=React.lazy(()=>import('./Components/Events'));
  const EventDetails=React.lazy(()=>import('./Components/EventDetails'))
  const AddEvent=React.lazy(()=>import('./Components/AddEvent'))
  const UpdateEvent=React.lazy(()=>import('./Components/UpdateEvent'))

  return (
    <>
      <NavigationBar/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Events/>}/>
        <Route path="/details/:name" element={<EventDetails/>}/>
        <Route path="/addEvent" element={<AddEvent/>}/>
        <Route path="/updateEvent/:id" element={<UpdateEvent/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
