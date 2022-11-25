import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const CategoryDisplay = () => {
    const books = useLoaderData();

    return (
        <div className='pt-8 pb-8'>
            <h1 className='text-center text-xl lg:text-3xl font-bold'>Category display</h1>
            <p className='py-2'>All books for category : <span className='text-purple-600 text-xl'>{books[0]?.category}</span></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    books.map((book, i) => <BookCard
                        key={i}
                        book={book}
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default CategoryDisplay;