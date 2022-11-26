import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../Component/Loader/Loader';
import UserCard from '../../Component/UserCard/UserCard';

const Allseller = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/sellers?role=seller');
            const data = res.data;

            return data;
        },
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='p-2'>
            <h2 className='text-2xl font-bold'>Sellers Board</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

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
                            data?.map((user, i) => <UserCard
                                key={i}
                                user={user}
                            ></UserCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allseller;