import { Navbar } from "react-bootstrap"
import {NavLink} from "react-router-dom"

function NavigationBar(){
    return(

        <Navbar>
         <NavLink to="/" className={({isActive})=>(isActive ? "active":"")}>
            Events
         </NavLink>
         </Navbar>
        
    )
}
export default NavigationBar