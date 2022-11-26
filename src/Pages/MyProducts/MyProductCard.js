import React from 'react';

const MyProductCard = ({ book }) => {

    const {
        PurchaseTime,
        bookname,
        reSalePrice,
        writtername,
        category,
        image,
        date } = book;

    return (
        <div className='p-2 m-2 bg-zinc-200'>
            <div className='flex flex-col lg:flex-row'>
                <div className='max-w-[200px]'>
                    <img className='rounded-lg' src={image} alt="bookimage" />
                </div>


                <div className='lg:pl-4 flex-1'>
                    <div className="grid lg:grid-cols-2">
                        <div>
                            <p className='pb-2'>Book Name <br /> <span className='text-green-500'>{bookname}</span>                    </p>
                            <p className='pb-2'>Author<br /> <span className='text-green-500'>{writtername}</span>                    </p>
                            <p className='pb-2'>Category<br /> <span className='text-green-500'>{category}</span>                    </p>
                            <p>Sale Status: <span>Available</span></p>
                        </div>
                        <div>

                            <p>Posted {date ? date.slice(0, 10) : 'n/a'} at {date ? date.slice(11, 16) : 'n/a'}</p>
                            <p>Purchase date: {PurchaseTime}</p>
                            <p>Re-sale Price : {reSalePrice} Taka</p>
                            <button className='btn'>Add to Advertise</button>
                            <button className='btn m-2'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MyProductCard;