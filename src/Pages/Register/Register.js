import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`


    const handleUserRegistration = (data) => {
        const profileImage = data.img[0];
        const formData = new FormData();
        formData.append('profileImage', profileImage);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const profile = {
                        displayName: name,
                        photoURL: imgData.data.url
                    }
                    console.log(profile);
                }

            })

        // updateUser(profile)
        //     .then(data => {
        //         console.log(data);
        //     })
        const email = data.email;
        const password = data.password;
        const name = data.name;

        createUser(email, password)
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error))
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

                <p className='pt-4'>Have an Account ? <Link className='text-green-500' to='/login'>Please LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;