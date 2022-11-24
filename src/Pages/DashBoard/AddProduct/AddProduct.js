import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const handleProductAdding = data => {
        console.log(data)
    };

    return (
        <div className='bg-red-100'>
            <form onSubmit={handleSubmit(handleProductAdding)}>
                <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 p-4'>
                    <div className='pb-2'>
                        <label>Book Name</label>
                        <input className='input input-bordered w-full' {...register("bookname",
                            { required: "Insert Book name" })} placeholder='Book title' />
                        {errors?.bookname && <span className='text-amber-600'>{errors?.bookname?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Writter</label>
                        <input className='input input-bordered w-full' {...register("writtername",
                            { required: "Insert writter name" })} placeholder='Author/ Writer' />
                        {errors?.writtername && <span className='text-amber-600'>{errors?.writtername?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Condition</label>
                        <select className='input input-bordered w-full'
                            {...register("condition",
                                { required: "Insert writter name" })} >
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>

                        {errors?.condition && <span className='text-amber-600'>{errors?.condition?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Price</label>
                        <input className='input input-bordered w-full' {...register("price",
                            { required: "Price needed" })} placeholder='$' />
                        {errors?.price && <span className='text-amber-600'>{errors?.price?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Location</label>
                        <input className='input input-bordered w-full' {...register("location",
                            { required: "location needed" })} placeholder='Your location' />
                        {errors?.location && <span className='text-amber-600'>{errors?.location?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Mobile No</label>
                        <input className='input input-bordered w-full' {...register("mobile",
                            { required: "mobile needed" })} placeholder='Your mobile no' />
                        {errors?.mobile && <span className='text-amber-600'>{errors?.location?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Year of Purchase</label>
                        <input className='input input-bordered w-full' {...register("PurchaseTime",
                            { required: "Purchase Time required" })} placeholder='Purchase Time' />
                        {errors?.PurchaseTime && <span className='text-amber-600'>{errors?.PurchaseTime?.message}</span>}
                    </div>
                </div>

                <div className='p-4'>
                    <label>Description</label>
                    <input className='input input-bordered w-full' {...register("description",
                        { required: "description needed" })} placeholder='Description' />
                    {errors?.description && <span className='text-amber-600'>{errors?.location?.message}</span>}
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;