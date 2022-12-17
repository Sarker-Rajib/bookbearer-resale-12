import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { categoryName, categoryID } = category;
    return (
        <div className='border p-1 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className="bg-white rounded">
                <Link to={`/category/${categoryID}`}>
                    <h3 className='text-2xl py-2 text-center'>{categoryName}</h3>
                    {/* <img src={image} alt="category cover" /> */}
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;