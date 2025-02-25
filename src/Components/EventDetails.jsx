import { useParams } from 'react-router-dom';
import db from '../api/db.json';
function EventDetails(){
    const {name}=useParams();
    const events=db.events;
    const event=events.find((event) => event.name === name)
    if(!event){
        alert("Event does not exist");
    }
    return(
        <div className="container">
        <img src={event.img} alt={event.name}/>
        <h1>{event.name}</h1>
        <h3>Description:</h3>
        <p>{event.description}</p>
        <h3>Price:</h3>
        <p>{event.price}</p>
        </div>
    )
}

export default EventDetails