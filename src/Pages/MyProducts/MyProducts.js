import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import MyProductCard from './MyProductCard';




const MyProducts = () => {
    const { currentUser } = useContext(AuthContext);

    const { data = [], isLoading } = useQuery({
        queryKey: ["email"],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/books?email=${currentUser.email}`);
            const data = res.data;

            return data;
        },
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            {
                data?.map((book, i) => <MyProductCard
                    key={i}
                    book={book}
                ></MyProductCard>)
            }
        </div>
    );
};

export default MyProducts;