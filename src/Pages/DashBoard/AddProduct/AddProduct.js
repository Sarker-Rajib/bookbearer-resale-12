import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbkey = process.env.REACT_APP_imgbb_key;


    const handleProductAdding = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const date = new Date();

        const {
            PurchaseTime,
            bookname,
            condition,
            description,
            location,
            mobile,
            price,
            category,
            writtername
        } = data;

        let categoryId = 101;

        if (category === 'Romance') {
            categoryId = categoryId + 1
        }
        if (category === 'Horror') {
            categoryId = categoryId + 2
        }
        if (category === 'Thriller') {
            categoryId = categoryId + 3
        }
        if (category === 'Historical') {
            categoryId = categoryId + 4
        }
        if (category === 'Adventure stories') {
            categoryId = categoryId + 5
        }
        if (category === 'Crime') {
            categoryId = categoryId + 6
        }
        if (category === 'Fantasy') {
            categoryId = categoryId + 7
        }
        if (category === 'Fairy tales') {
            categoryId = categoryId + 8
        }

        fetch(`https://api.imgbb.com/1/upload?key=${imgbbkey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const photoURL = imgData.data.display_url;
                const bookDetails = {
                    categoryId,
                    PurchaseTime,
                    bookname,
                    condition,
                    description,
                    location,
                    mobile,
                    price,
                    writtername,
                    category,
                    image: photoURL,
                    date
                }
                console.log(bookDetails);
                fetch("http://localhost:5000/books", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(bookDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('Book added successfully')
                        }
                    })
            })
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
                                { required: "Select Condition" })} >
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>

                        {errors?.condition && <span className='text-amber-600'>{errors?.condition?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Category</label>
                        <select className='input input-bordered w-full'
                            {...register("category",
                                { required: "select category" })} >
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Historical">Historical</option>
                            <option value="Adventure stories">Adventure stories</option>
                            <option value="Crime">Crime</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Fairy tales">Fairy tales</option>
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
                        {errors?.mobile && <span className='text-amber-600'>{errors?.mobile?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Date of Purchase</label>
                        <input className='input input-bordered w-full' {...register("PurchaseTime",
                            { required: "Purchase date required" })} placeholder='dd/mm/yyyy' />
                        {errors?.PurchaseTime && <span className='text-amber-600'>{errors?.PurchaseTime?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Image</label>
                        <input type='file' className='input input-bordered w-full' {...register("image",
                            { required: "Image required" })} placeholder='Purchase Time' />
                        {errors?.image && <span className='text-amber-600'>{errors?.image?.message}</span>}
                    </div>
                </div>

                <div className='p-4'>
                    <label>Description</label>
                    <input className='input input-bordered w-full' {...register("description",
                        { required: "description needed" })} placeholder='Description' />
                    {errors?.description && <span className='text-amber-600'>{errors?.description?.message}</span>}

                    <input type="submit" className='btn mt-4 w-full' value='Add product' />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;