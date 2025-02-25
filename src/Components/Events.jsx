import Event from './Event'
import{getallEvents} from '../services/api'
import{useEffect, useState} from 'react';
function Events(){
   const[eventList,setEventList]=useState([]);
   useEffect(()=>{
      const getAllEvents=async ()=>{
         const data=await getallEvents();
         setEventList(Array.isArray(data) ? data : []);
      };
      getAllEvents();
   },[]);
   
   return(
      <div className="container">
         {eventList.map((event,index)=>(
            <>
         <Event key={index} img={event.img} name={event.name} description={event.description} price={event.price} nbTickets={event.nbTickets} nbParticipants={event.nbParticipants}/>
         </>
      ))
         
      }
      </div>
      
      
   )
}
export default Events;