import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const HomeCategories = () => {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/bookCategories')
            .then(data => {
                setAllCategories(data.data);
            })
    }, [])

    return (
        <div className='pt-16'>
            <h2 className='text-2xl lg:text-5xl font-bold text-center pb-2'>Second hand Books Categories</h2>
            <p className='text-center pb-4'>Choose Your Favourite category.</p>

            <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                {
                    allCategories.map((category, i) => <CategoryCard
                        key={i}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default HomeCategories;