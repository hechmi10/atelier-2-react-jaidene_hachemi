import Event from "./Event"
function EventDetails(){
    const event=new Event();
    return(
        <>
        <img src={event.image}/>
        <h1>{event.name}</h1>
        </>
    )
}
export default EventDetails