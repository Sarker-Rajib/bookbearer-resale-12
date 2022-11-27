import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../Component/Loader/Loader';
import BuyerCard from '../../Component/UserCard/BuyerCard';

const AllBuyer = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/users?role=buyer');
            const data = res.data;

            return data;
        },
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto w-full">
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