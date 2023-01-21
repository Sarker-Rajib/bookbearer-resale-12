import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const CategoryDisplay = () => {
    const books = useLoaderData();

    return (
        <div className="max-w-screen-xl mx-auto mt-24">
            <div className='pt-8 pb-8'>
                <h1 className='text-center text-xl lg:text-3xl font-bold'>Category display</h1>
                <p className='py-2'>All books for category : <span className='text-purple-600 text-xl'>{books[0]?.category}</span></p>

                <div className='grid pt-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        books.map((book, i) => <BookCard
                            key={i}
                            book={book}
                        ></BookCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default CategoryDisplay;