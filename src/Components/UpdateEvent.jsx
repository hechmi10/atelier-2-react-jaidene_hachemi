import {useForm} from 'react-hook-form'
import { editEvent } from '../services/api';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import db from '../api/db.json'
const eventSchema=z.object({
    name:z.string().min(3,"C'est moins de 3 caractères"),
    description:z.string().min(10,"C'est moins de 10 caractères"),
    price:z.number().gte(1,"Required price").lte(1000,"Max price passed"),
    nbTickets:z.number().gte(1,"Required number of tickets").lte(100,"Max tickets passed"),
    img:z.instanceof(FileList).refine((files) => files.length > 0, "Image is required")
    .refine((files) => files[0].size <= 50 * 1024, "Image size must be less than 50KB")
})

function UpdateEvent(){
    let {id}=useParams()
    id=db.events.id;
    const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:zodResolver(eventSchema)});
    const onSubmit=async (data)=>{
        await editEvent(id,data);
        reset();
    }
    return(
        <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
            <label className='form-label'>Name</label><br/>
            <input className='form-control' {...register('name')} placeholder="Event Name" required /><br/>
            {errors.name && <p>{errors.name.message}</p>}
            <label className='form-label'>Description</label><br/>
            <textarea className='form-control' {...register('description')} placeholder="Description" required /><br/>
            {errors.description && <p>{errors.description.message}</p>}
            <label className='form-label'>Price</label><br/>
            <input type='number' className='form-control' {...register('price',{valueAsNumber:true})} placeholder="Price" required /><br/>
            {errors.price && <p>{errors.price.message}</p>}
            <label className='form-label'>Number of Tickets</label><br/>
            <input type='number' className='form-control' {...register('nbTickets',{valueAsNumber:true})} placeholder="Number of Tickets" required /><br/>
            {errors.nbTickets && <p>{errors.nbTickets.message}</p>}
            <label className='form-label'>Image</label><br/>
            <input type='file' className='form-control' {...register('img')} placeholder="Image" required /><br/>
            {errors.img && <p>{errors.img.message}</p>}
            <button className='btn btn-primary' type="submit">Ajouter</button><br/>
        </form>
    )
}
export default UpdateEvent