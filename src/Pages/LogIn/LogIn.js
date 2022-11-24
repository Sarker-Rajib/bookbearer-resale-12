import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const LogIn = () => {
    const { logIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleUserLogin = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        logIn(email, password)
            .then(data => {
                if (data.user.email) {
                    navigate(from, { replace: true });
                    toast.success('Login Successful')
                }
            }
            )
            .catch(err => console.error(err))
    };

    return (
        <div className='py-6'>
            <div className='max-w-sm mx-auto p-2 border rounded'>
                <h2 className='text-center text-3xl pb-3'>Log In</h2>
                <form onSubmit={handleSubmit(handleUserLogin)}>

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
                <p className='pt-4'>New in this site ? <Link className='text-green-500' to='/register'>Please Register</Link></p>
            </div>
        </div>
    );
};

export default LogIn;