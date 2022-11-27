import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const BookingModal = ({ bookinData, setBookingData }) => {
    const { currentUser } = useContext(AuthContext);
    const { bookname, reSalePrice, image } = bookinData;

    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const meetingLocation = event.target.meetingLocation.value;
        const date = new Date();

        axios.post('https://bookbearer-server.vercel.app/bookings', {
            phoneNumber: phone,
            meetingLocation,
            name: currentUser?.displayName,
            email: currentUser?.email,
            date,
            bookname,
            reSalePrice,
            image
        })
            .then(result => {
                // console.log(result);
                if (result.data.acknowledged) {
                    toast.success('Booking Successful');
                    setBookingData(null)
                }
            })
    };

    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setBookingData(null)} htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Book this item</h3>

                    <p>Book Name: <span className='text-green-500'>{bookname}</span></p>
                    <p>Price : {reSalePrice} Taka</p>
                    <hr className='my-2' />
                    <p className='font-bold'>Your Info -</p>
                    <p>Email: {currentUser?.email}</p>
                    <p>Name: {currentUser?.displayName}</p>
                    <form onSubmit={handleBooking}>
                        <input className='input w-full input-bordered mb-2' type="text" name='phone' placeholder='Your Contact Number' required />
                        <input className='input w-full input-bordered mb-2' type="text" name='meetingLocation' placeholder='Meeting Location' required />
                        <input type="submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;