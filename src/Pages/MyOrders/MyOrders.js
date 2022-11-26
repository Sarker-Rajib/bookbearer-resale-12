import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import Loader from '../../Component/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const MyOrders = () => {
    const { currentUser } = useContext(AuthContext);

    const { data = [], isLoading } = useQuery({
        queryKey: ["email"],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/bookings?email=${currentUser?.email}`);
            const data = res.data;
            return data;
        },
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='p-2'>
            <h2 className='font-bold text-lg'>My Orders Board</h2>
            <hr className='my-2' />
            <p>{data.lenght}</p>
        </div>
    );
};

export default MyOrders;