import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';




const MyProducts = () => {
    const { currentUser } = useContext(AuthContext);

    const { data = [] } = useQuery({
        queryKey: ["email"],
        queryFn: async () => {
            const data = await axios(`http://localhost:5000/books?email=${currentUser.email}`)
            return data;
        },
    })

    console.log(data);

    return (
        <div>
            hello
            <p>{data?.data?.length}</p>
        </div>
    );
};

export default MyProducts;