import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../Component/Loader/Loader';
import SellerCard from '../../Component/UserCard/SellerCard';

const Allseller = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ["role"],
        queryFn: async () => {
            const res = await axios('https://bookbearer-server.vercel.app/users?role=seller');
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
            <hr className='mb-2'/>

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
                            sellers?.map((seller, i) => <SellerCard
                                key={i}
                                seller={seller}
                                refetch={refetch}
                            ></SellerCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allseller;