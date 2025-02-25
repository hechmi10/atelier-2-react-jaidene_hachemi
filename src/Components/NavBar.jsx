import { Navbar } from "react-bootstrap"
import {NavLink} from "react-router-dom"

function NavigationBar(){
    return(
        <>
        <h3>My Events</h3>
        <Navbar>
         <NavLink to="/" className={({isActive})=>(isActive ? "active":"")}>
            Events
         </NavLink>
         <NavLink to="/addEvent" className={({isActive})=>(isActive ? "active":"")}>
            Add an event
         </NavLink>
         </Navbar>
         </>
        
    )
}
export default NavigationBar