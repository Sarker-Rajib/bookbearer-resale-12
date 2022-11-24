import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleUserRegistration = (data) => {
        const profileImage = data.img[0];
         
        console.log(profileImage);
    };

    return (
        <div className='py-6'>
            <div className='max-w-sm mx-auto p-2 border rounded'>
                <h2 className='text-center text-3xl pb-3'>Register</h2>
                <form onSubmit={handleSubmit(handleUserRegistration)}>

                    <div className='pb-4'>
                        <label>Full Name</label>
                        <input className='w-full p-2 rounded-md border focus:border-indigo-500 focus:ring-indigo-500'
                            placeholder='Your Name'
                            {...register("name",
                                { required: "Please enter Your name" })} />
                        {errors.name && <span className='text-red-400'>{errors.name?.message}</span>}
                    </div>

                    <div className='pb-4'>
                        <label className='label'>Photo</label>
                        <input className='w-full input input-bordered' type='file'
                            {...register("img",
                                { required: 'please enter your photo' })} />
                        {errors.img && <p className='text-red-500' role='alert'>{errors.img?.message}</p>}
                    </div>

                    <div className='pb-4'>
                        <label>Email</label>
                        <input className='w-full p-2 rounded-md border focus:border-indigo-500 focus:ring-indigo-500'
                            placeholder='Your email address'
                            {...register("email",
                                { required: "Email Required" })} />
                        {errors.email && <span className='text-red-400'>{errors.email?.message}</span>}
                    </div>

                    <div className='pb-4'>
                        <label>Password</label>
                        <input className='w-full p-2 rounded-md border focus:border-indigo-500 focus:ring-indigo-500'
                            placeholder='Password'
                            {...register("password",
                                { required: 'Password Required' })} />
                        {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}
                    </div>



                    <input type="submit" className='btn w-full py-2 bg-slate-200 rounded' />
                </form>
            </div>
        </div>
    );
};

export default Register;