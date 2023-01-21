import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import tickImage from '../../Assets/Images/tick.png'

const BookCard = ({ book }) => {
    const [bookinData, setBookingData] = useState(null);
    const [sellerData, setSellerData] = useState([]);

    const {
        PurchaseTime,
        bookname,
        location,
        mobile,
        originalPrice,
        reSalePrice,
        image,
        seller,
        date,
        email } = book;

    useEffect(() => {
        fetch(`https://bookbearer-server.vercel.app/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setSellerData(data);
            })
    }, [email]);

    return (
        <div className='rounded-lg overflow-hidden p-2 bg-white border-4'
            style={{ borderRadius: "15px", boxShadow: "0px 0px 10px 5px #533cda46" }}>
            <div className='pb-2'>
                <img className='rounded-lg' src={image} alt="bookimage" />
            </div>
            <p className='pb-2'><span className='text-green-500 text-xl'>{bookname}</span>                    </p>
            <p>Price : <del>{originalPrice}</del>  {reSalePrice}Taka</p>
            <p className='flex items-center'>
                Seller Name : {seller}
                {
                    sellerData[0]?.verified === true ? <span className='ml-2 flex items-center text-green-600'>Verified<img className='h-4 ml-2 w-4' src={tickImage} alt='tick' /></span> : <span className='ml-2 text-yellow-600'>Not Verified</span>
                }
            </p>
            <p>{location} - {date ? date.slice(0, 10) : 'n/a'} at {date ? date.slice(11, 16) : 'n/a'}</p>

            <p className='pb-2'>Contact : {mobile}</p>
            <label onClick={() => setBookingData(book)} htmlFor="bookingModal" className="btn">Book Now</label>

            <>
                {/* booking modal */}
                {
                    bookinData && <BookingModal
                        bookinData={bookinData}
                        setBookingData={setBookingData}
                    ></BookingModal>
                }

            </>
        </div>
    );
};

export default BookCard;