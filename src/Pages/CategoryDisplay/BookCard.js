import React from 'react';

const BookCard = ({ book }) => {
    const {
        PurchaseTime,
        bookname,
        condition,
        description,
        location,
        mobile,
        originalPrice,
        reSalePrice,
        writtername,
        category,
        image,
        seller,
        date } = book;

    return (
        <div className='border rounded-lg overflow-hidden p-2 bg-stone-100 shadow-lg'>
            <div className='grid grid-cols-2 gap-2 pb-2'>
                <img className='rounded-lg' src={image} alt="bookimage" />
                <div>
                    <p className='pb-2'>Book Name <br /> <span className='text-green-500'>{bookname}</span>                    </p>
                    <p className='pb-2'>Author<br /> <span className='text-green-500'>{writtername}</span>                    </p>
                    <p className='pb-2'>Category<br /> <span className='text-green-500'>{category}</span>                    </p>
                    <p className='pb-2'>Condition<br /> <span className='text-green-500'>{condition}</span>                    </p>
                    <p >Description<br /> <span className='text-green-500'>{description}</span>                    </p>
                </div>
            </div>
            <p>Posted {date ? date.slice(0, 10) : 'n/a'} at {date ? date.slice(11, 16) : 'n/a'}</p>
            <p>Purchase date: {PurchaseTime}</p>
            <p>Original Price : {originalPrice} Taka</p>
            <p>Re-sale Price : {reSalePrice} Taka</p>
            <p>Location : {location}</p>
            <p>Seller Name : {seller}</p>
            <p className='pb-2'>Contact : {mobile}</p>
            <button className='btn'>Book Now</button>
        </div>
    );
};

export default BookCard;