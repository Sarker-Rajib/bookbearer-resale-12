import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import UserCard from '../../Component/UserCard/UserCard';

const AllBuyer = () => {

    const { data = [], isLoading } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/sellers?role=buyer');
            const data = res.data;

            return data;
        },
    })

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
                        data?.map((user, i) => <UserCard
                            key={i}
                            user={user}
                        ></UserCard>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default AllBuyer;