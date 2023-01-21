import React, { useEffect, useState } from 'react';
import tickImage from '../../../Assets/Images/tick.png';

const AdvertisementCard = ({ book }) => {
    const [sellerData, setSellerData] = useState([]);

    const {
        bookname,
        condition,
        reSalePrice,
        writtername,
        category,
        image,
        email } = book;

    useEffect(() => {
        fetch(`https://bookbearer-server.vercel.app/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setSellerData(data);
            })
    }, [email]);

    return (
        <div className="p-2 bg-gradient-to-"
            style={{ borderRadius: "15px", boxShadow: "0px 0px 10px 5px #533cda46" }}>
            <div className="p-2 border rounded-lg bg-white h-full">
                <div className='rounded'>
                    <div className="grid">
                        <figure><img className='rounded' src={image} alt="Movie" /></figure>
                        <div className="pt-2">
                            <h2 className="card-title">{bookname}</h2>
                            <p className='m-0 pb-1'>Writter: {writtername}</p>
                            <p className='m-0 pb-1'>Category: {category}</p>
                            <p className='m-0 pb-1'>Condition: {condition}</p>
                            <p className='m-0 pb-1'>Price: {reSalePrice}</p>

                            <h2 className='flex items-center pb-2'>Seller : {sellerData[0]?.name}
                                {
                                    sellerData[0]?.verified === true ? <span className='flex items-center ml-2 text-green-600'>Verified<img className='h-4 w-4 ml-2' src={tickImage} alt='tick' /></span> : <span className='ml-2 text-yellow-600'>Not Verified</span>
                                }
                            </h2>
                            <button className="btn btn-primary w-full">View Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdvertisementCard;