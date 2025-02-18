import { useParams } from 'react-router-dom';
import events from '../events.json'
function EventDetails(){
    const {name}=useParams();

    const event=events[name];

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