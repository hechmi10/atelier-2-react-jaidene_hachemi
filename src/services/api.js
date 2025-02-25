import axios from "axios";
const url = "http://localhost:3001/events";
export const getallEvents = async () => {
return (await axios.get(url)).data;
};
export const getEventById= async(id)=>{
    return (await axios.get(`${url}/${id}`)).data;
}
export const addEvent = async (event) => {
return (await axios.post(url, event)).data;
};
export const editEvent = async (id, event) => {
return (await axios.put(`${url}/${id}`, event)).data;
};
export const deleteEvent = async (id) => {
return (await axios.delete(`${url}/${id}`)).data;
};