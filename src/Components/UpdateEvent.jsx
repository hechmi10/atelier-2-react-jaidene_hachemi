import {useForm} from 'react-hook-form'
import { editEvent } from '../services/api';
import { useParams } from 'react-router-dom';
import { z } from 'zod'

const eventSchema=z.object({
    
})

function UpdateEvent(){
    const {id}=useParams()
    const {register,handleSubmit,reset}=useForm();
    const onSubmit=async (data)=>{
        await editEvent(id,data);
        reset();
    }
    return(
        <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
            <label className='form-label'>Name</label><br/>
            <input className='form-control' {...register('name')} placeholder="Event Name" required /><br/>
            <label className='form-label'>Description</label><br/>
            <textarea className='form-control' {...register('description')} placeholder="Description" required /><br/>
            <label className='form-label'>Price</label><br/>
            <input type='number' className='form-control' {...register('price')} placeholder="Price" required /><br/>
            <label className='form-label'>Number of Tickets</label><br/>
            <input type='number' className='form-control' {...register('nbTickets')} placeholder="Number of Tickets" required /><br/>
            <label className='form-label'>Image</label><br/>
            <input type='file' className='form-control' {...register('img')} placeholder="Image" required /><br/>
            <button className='btn btn-primary' type="submit">Ajouter</button><br/>
        </form>
    )
}
export default UpdateEvent