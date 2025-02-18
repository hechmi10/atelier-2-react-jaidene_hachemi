import Event from './Event'
import events from '../events.json'

function Events(){
   return(
      <div className="container">
         {events.map((event,index)=>(
         <Event key={index} img={event.img} name={event.name} description={event.description} price={event.price} nbTickets={event.nbTickets} nbParticipants={event.nbParticipants}/>
      ))
         
      }
      </div>
      
      
   )
}
export default Events;