import React, { useEffect, useState } from 'react';
import tickImage from '../../../Assets/Images/tick.png';

const AdvertisementCard = ({ book }) => {
    const [sellerData, setSellerData] = useState([]);

    const { PurchaseTime,
        bookname,
        condition,
        description,
        location,
        mobile,
        reSalePrice,
        writtername,
        category,
        image,
        email } = book;

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setSellerData(data);
            })
    }, [email]);

    return (
        <div className='border rounded p-2'>
            <div className="grid grid-cols-2">
                <figure><img className='rounded' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookname}</h2>
                    <p>Writter: {writtername}</p>
                    <p>Category: {category}</p>
                    <p>Condition: {condition}</p>
                    <p>Location: {location}</p>
                    <p>Number: {mobile}</p>
                    <p>Des: {description}</p>
                    <p>Date: {PurchaseTime}</p>
                    <p>Price: {reSalePrice}</p>
                </div>
            </div>

            <h2 className='flex items-center p-2'>Seller : {sellerData[0]?.name}
                {
                    sellerData[0]?.verified === true ? <span className='flex items-center ml-2 text-green-600'>Verified<img className='h-4 w-4 ml-2' src={tickImage} alt='tick' /></span> : <span className='ml-2 text-yellow-600'>Not Verified</span>
                }
            </h2>
            <button className="btn btn-primary">Book Now</button>
           
        </div>
    );
};

export default AdvertisementCard;