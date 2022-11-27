import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const MyOrders = () => {
    const { currentUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // const { data = [], isLoading } = useQuery({
    //     queryKey: ["email"],
    //     queryFn: async () => {
    //         const res = fetch(`http://localhost:5000/bookings?email=${currentUser.email}`)
    //         const data = await res.json();
    //         console.log(data);
    //     },
    // })

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${currentUser?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrders(data)
            })

    }, [currentUser?.email]);

    return (
        <div className='p-2'>
            <h2 className='font-bold text-lg'>My Orders Board</h2>
            <hr className='my-2' />
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={i}>
                                <th><img className='h-24 rounded' src={order.image} alt="cover" /></th>
                                <th>{order.bookname}</th>
                                <td>{order.reSalePrice}</td>
                                <td><button className='btn'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;