import './App.css'
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound'
import NavigationBar from './Components/NavBar'
import React, { Suspense } from 'react'

function App() {
  const Events=React.lazy(()=>import('./Components/Events'));
  const EventDetails=React.lazy(()=>import('./Components/EventDetails'))

  return (
    <>
      <NavigationBar/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Events/>}/>
        <Route path="/details/:eventName" element={<EventDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
