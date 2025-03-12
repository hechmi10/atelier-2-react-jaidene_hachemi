import PropTypes from 'prop-types'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { deleteEvent } from '../services/api';

function Event(props){
    let {id,name,img,price,nbTickets,nbParticipants,like}=props
    let [tickets,setTickets]=useState(nbTickets);
    let [participants,setParticipants]=useState(nbParticipants)
    let [image,setImage]=useState(img);
    let [liker,setLiker]=useState(like);
    let buy=()=>{
        setTickets(tickets-1);
        setParticipants(participants+1);
        <Alert onDurationChange={2}>Event booked</Alert>
        if(tickets==0){
            image='../images/soldOut.jpg'
            setImage(image);
            console.log("Sold Out");
        }
        console.log("Event booked");
    }
    let likeEvent=()=>{
        setLiker(!liker)
        console.log(liker)
        return liker;
    }
    const onEventDelete=async ()=>{
        await deleteEvent(id);
    }
    return(
        <>
        <div className="card">
            <div className="row">
                <div className="col">
                    <img src={img} height="300px" width="300px"/>
                    <h1>Event Name:<NavLink to={`/details/${name}`} className={({isActive})=>(isActive?"active":"")}>{name}</NavLink></h1>
                    <p>Price:{price}</p>
                    <p>Number of Tickets:{tickets}</p>
                    <p>Number of Participants:{participants}</p>
                    <Button disabled={0} onClick={buy}>Book an event</Button>
                    <Button onClick={likeEvent}>{likeEvent?"Like":"Dislike"}</Button>
                    <Button className='btn btn-success'><NavLink to={`/updateEvent/${id}`} className={({isActive})=>(isActive?"active":"")}>Update</NavLink></Button>
                    <Button onClick={onEventDelete} className='btn btn-danger'>Delete</Button>
                </div>
            </div>
        </div>
        </>
    )
}

Event.propTypes={
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    img:PropTypes.instanceOf(File).isRequired,
    price:PropTypes.number.isRequired,
    nbTickets:PropTypes.number.isRequired,
    nbParticipants:PropTypes.number.isRequired,
    like:PropTypes.bool.isRequired
}

export default Event