import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../Component/Loader/Loader';
import BuyerCard from '../../Component/UserCard/BuyerCard';

const AllBuyer = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axios('https://bookbearer-server.vercel.app/users?role=buyer');
            const data = res.data;

            return data;
        },
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto w-full p-2">
            <h2 className='p-2 font-bold text-lg'>All Buyers</h2>
            <hr className='mb-2'/>
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        buyers?.map((buyer, i) => <BuyerCard
                            key={i}
                            buyer={buyer}
                            refetch={refetch}
                        ></BuyerCard>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default AllBuyer;