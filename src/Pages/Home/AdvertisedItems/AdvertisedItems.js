import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertisementCard from './AdvertisementCard';

const AdvertisedItems = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/books')
            .then(data => {
                setbooks(data.data);
            })
    }, [])

    return (
        <div className='mt-6'>
            <h2 className='text-3xl'>Advertised Books</h2>
            <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
                {
                    books.map((book, i) => <AdvertisementCard
                        key={i}
                        book={book}
                    ></AdvertisementCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;