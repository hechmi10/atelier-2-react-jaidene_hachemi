import { NavLink } from "react-bootstrap"

function NavigationBar(){
    return(

        <NavLink to={({isActive})=>(isActive?"active":"")}>
            Events
        </NavLink>
    )
}
export default NavigationBar