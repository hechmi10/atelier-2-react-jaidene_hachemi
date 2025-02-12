import PropTypes from 'prop-types'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

function Event(props){
    let {name,description,img,price,nbTickets,nbParticipants,like}=props
    let [tickets,setTickets]=useState(nbTickets);
    let [participants,setParticipants]=useState(nbParticipants)
    let [image,setImage]=useState(img);
    let [liker,setLiker]=useState(like);
    let buy=()=>{
        setTickets(tickets-1);
        setParticipants(participants+1);
        <Alert onDurationChange={20}>Event booked</Alert>
        if(tickets==0){
            setImage("src/assets/soldOut.jpg");
            console.log("Sold Out");
        }
        console.log("Event booked");
    }
    let likeEvent=()=>{
        setLiker(!liker)
        console.log(liker)
    }
    return(
        <>
        <Alert onDurationChange={30}>Hey welcome to Engineer School Events</Alert>
        <div className="card">
            <div className="row">
                <div className="col">
                    <img src={img} height="300px" width="300px"/>
                    <h1>Event Name:{name}</h1>
                    <p>Price:{price}</p>
                    <p>Number of Tickets:{nbTickets}</p>
                    <p>Number of Participants:{nbParticipants}</p>
                    <Button disabled={0} onClick={buy}>Book an event</Button>
                    <Button onClick={likeEvent}>Like</Button>
                </div>
            </div>
        </div>
        </>
    )
}

Event.propTypes={
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    nbTickets:PropTypes.number.isRequired,
    nbParticipants:PropTypes.number.isRequired,
    like:PropTypes.bool.isRequired
}

export default Event