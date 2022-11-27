import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
// import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Register = () => {
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbkey = process.env.REACT_APP_imgbb_key;
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleUserRegistration = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        const email = data.email;
        const password = data.password;
        const userName = data.name;
        const role = data.role;

        createUser(email, password)
            .then(data => {

                const email = data.user.email;
                const uid = data.user.uid;

                fetch(`https://api.imgbb.com/1/upload?key=${imgbbkey}`, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        const photoURL = imgData.data.display_url;
                        const profile = {
                            displayName: userName,
                            photoURL: photoURL
                        }
                        updateUser(profile)
                            .then(() => {
                                navigate(from, { replace: true });
                                toast.success('User Created Successful')
                            })


                        axios.post('http://localhost:5000/users', {
                            email,
                            uid,
                            name: userName,
                            image: photoURL,
                            role
                        })
                            .then(result => {
                                console.log(result);
                            })
                    })
            })
            .catch(error => console.error(error))
    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(data => {

                navigate(from, { replace: true });

                const user = {
                    email: data.user.email,
                    uid: data.user.uid,
                    name: data.user.displayName,
                    image: data.user.photoURL,
                    role: 'buyer'
                }

                fetch(`http://localhost:5000/users?email${data.user.email}`, {
                    method: 'PUT',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                    })

                toast.success('Login successful');
            })
            .catch(err => console.error(err));
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
                        <input type='password' className='w-full p-2 rounded-md border focus:border-indigo-500 focus:ring-indigo-500'
                            placeholder='Password'
                            {...register("password",
                                { required: 'Password Required' })} />
                        {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}
                    </div>

                    <div className='pb-2'>
                        <label>Want to be a seller? <br /> (select Seller from option below)</label>
                        <select className='input input-bordered w-full'
                            {...register("role",
                                { required: "Select Condition" })} >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>

                        {errors?.condition && <span className='text-amber-600'>{errors?.condition?.message}</span>}
                    </div>

                    <input type="submit" className='btn w-full' />
                </form>
                <div className='pt-6'>
                    <button onClick={handleGoogleSignin} className='btn w-full'>Login With Google</button>
                </div>

                <p className='pt-4'>Have an Account ? <Link className='text-green-500' to='/login'>Please LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;