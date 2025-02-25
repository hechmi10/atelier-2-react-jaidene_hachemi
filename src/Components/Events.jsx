import Event from './Event'
import{getallEvents} from '../services/api'
import { Alert } from 'react-bootstrap';
import{useEffect, useState} from 'react';
function Events(){
   const[eventList,setEventList]=useState([]);
   useEffect(()=>{
      const getAllEvents=async ()=>{
         const data = await getallEvents();
         setEventList(data);
      };
      getAllEvents();
   },[]);
   
   return(
      <div className="container">
         <Alert onDurationChange={3}>Hey welcome to Engineer School Events</Alert>
         {eventList.map((event)=>(
         <Event key={event.id} img={event.img} name={event.name} description={event.description} price={event.price} nbTickets={event.nbTickets} nbParticipants={event.nbParticipants}/>
         
      ))
         
      }
      </div>
      
      
   )
}
export default Events;