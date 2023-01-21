import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../../Component/Loader/Loader';
import AdvertisementCard from './AdvertisementCard';

const AdvertisedItems = () => {

    const { data: books = [], isLoading } = useQuery({
        queryKey: ["advertise"],
        queryFn: async () => {
            const res = await axios(`https://bookbearer-server.vercel.app/books/advertise?advertise=true`);
            const data = res.data;

            return data;
        },
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    // console.log(books);

    return (
        <div className='pt-16'>
            {
                books && <div className='pt-16'>
                    <h2 className='text-2xl lg:text-5xl font-bold text-center pb-8'>Advertised Books</h2>
                    <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
                        {
                            books?.map((book, i) => <AdvertisementCard
                                key={i}
                                book={book}
                            ></AdvertisementCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AdvertisedItems;