import './App.css'
import Events from './Components/Events'
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound'
import NavigationBar from './Components/NavBar'
import EventDetails from './Components/EventDetails'

function App() {
  

  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Events/>}>
          <Route path="/details" element={<EventDetails/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
