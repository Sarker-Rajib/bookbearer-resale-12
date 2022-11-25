import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { categoryName, categoryID, image } = category;
    return (
        <div className='border rounded-md bg-yellow-50'>
            <Link to={`/category/${categoryID}`}>
                <img src={image} alt="category cover" />
                <h3 className='text-2xl py-2 text-center'>{categoryName}</h3>
            </Link>
        </div>
    );
};

export default CategoryCard;