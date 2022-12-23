import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const LogIn = () => {
    const { logIn, providerLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleUserLogin = (data) => {
        const email = data.email;
        const password = data.password;

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
 
            fetch(`https://bookbearer-server.vercel.app/users?email${data.user.email}`, {
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
    };

    return (
        <div className='pt-6 pb-36 mt-24'>
            <div className='max-w-md mx-auto p-4 border rounded'
            style={{borderRadius: "15px", border: "1px solid black", boxShadow:"0px 0px 5px 15px #533cda46"}}>
                <h2 className='text-center text-3xl pb-3'>Log In</h2>
                <form onSubmit={handleSubmit(handleUserLogin)}>

                    <div className='pb-4'>
                        <label>Email</label>
                        <input className='w-full p-2 rounded-md border focus:border-indigo-500'
                            placeholder='Your email address'
                            {...register("email",
                                { required: "Email Required" })} />
                        {errors.email && <span className='text-red-400'>{errors.email?.message}</span>}
                    </div>

                    <div className='pb-4'>
                        <label>Password</label>
                        <input type='password' className='w-full p-2 rounded-md border focus:border-indigo-500'
                            placeholder='Password'
                            {...register("password",
                                { required: 'Password Required' })} />
                        {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}
                    </div>

                    <input type="submit" className='btn w-full' />
                </form>
                <p className='pt-4'>New in this site ? <Link className='text-green-500' to='/register'>Please Register</Link></p>
                <div className='pt-6'>
                    <button onClick={handleGoogleSignin} className='btn w-full'>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;