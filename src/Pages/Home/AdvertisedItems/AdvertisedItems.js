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
        <div className='pt-16'>
            <h2 className='text-2xl lg:text-5xl font-bold text-center pb-2'>Advertised Books</h2>
            <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
                {/* {
                    books.map((book, i) => <AdvertisementCard
                        key={i}
                        book={book}
                    ></AdvertisementCard>)
                } */}
            </div>
        </div>
    );
};

export default AdvertisedItems;