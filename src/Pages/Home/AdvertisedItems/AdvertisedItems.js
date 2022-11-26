import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../../Component/Loader/Loader';
import AdvertisementCard from './AdvertisementCard';

const AdvertisedItems = () => {

    const { data: books = [], isLoading } = useQuery({
        queryKey: ["advertise"],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/books/advertise?advertise=true`);
            const data = res.data;

            return data;
        },
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    // console.log(books);

    return (
        <>
            {
                books && <div className='pt-16'>
                    <h2 className='text-2xl lg:text-5xl font-bold text-center pb-6'>Advertised Books</h2>
                    <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
                        {
                            books?.map((book, i) => <AdvertisementCard
                                key={i}
                                book={book}
                            ></AdvertisementCard>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default AdvertisedItems;