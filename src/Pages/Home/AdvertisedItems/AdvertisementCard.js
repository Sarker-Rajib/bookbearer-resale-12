import React from 'react';

const AdvertisementCard = ({ book }) => {
    const { PurchaseTime,
        bookname,
        condition,
        description,
        location,
        mobile,
        price,
        writtername,
        category,
        image } = book;

    return (
        <div className="card card-side bg-base-100 shadow-xl border">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookname}</h2>
                <p>{writtername}</p>
                <p>{category}</p>
                <p>{condition}</p>
                <p>{location}</p>
                <p>{mobile}</p>
                <p>{description}</p>
                <p>{PurchaseTime}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementCard;