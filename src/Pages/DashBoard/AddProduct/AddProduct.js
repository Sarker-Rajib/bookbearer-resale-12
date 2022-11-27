import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const AddProduct = () => {
    const { currentUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbkey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();


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
            originalPrice,
            reSalePrice,
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
                    originalPrice,
                    reSalePrice,
                    writtername,
                    category,
                    image: photoURL,
                    date,
                    seller: currentUser?.displayName,
                    email: currentUser?.email
                }

                fetch("https://bookbearer-server.vercel.app/books", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(bookDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            navigate('/dashboard/myproduct')
                            toast.success('Book added successfully')
                        }
                    })
            })
    };

    return (
        <div className='bg-yellow-700 bg-opacity-30 rounded p-2'>
            <h2 className='p-2 font-bold text-lg'>Add a Product</h2>
            <form onSubmit={handleSubmit(handleProductAdding)}>
                <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 p-2'>
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
                        <label>Use Duration</label>
                        <input className='input input-bordered w-full' {...register("useDuration",
                            { required: "useDuration needed" })} placeholder='Duration of using product' />
                        {errors?.useDuration && <span className='text-amber-600'>{errors?.useDuration?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Original Price</label>
                        <input className='input input-bordered w-full' {...register("originalPrice",
                            { required: "originalPrice needed" })} placeholder='taka' />
                        {errors?.originalPrice && <span className='text-amber-600'>{errors?.originalPrice?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Resale Price</label>
                        <input className='input input-bordered w-full' {...register("reSalePrice",
                            { required: "reSalePrice needed" })} placeholder='taka' />
                        {errors?.reSalePrice && <span className='text-amber-600'>{errors?.reSalePrice?.message}</span>}
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