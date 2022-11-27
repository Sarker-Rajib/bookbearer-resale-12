import React from 'react';
import toast from 'react-hot-toast';

const SellerCard = ({ seller, refetch }) => {
    const { name, email, image, verified, _id } = seller;

    const handleDeleteUser = (id) => {
        fetch(`https://bookbearer-server.vercel.app/user/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller : ${name} deleted successfully`)
                }
            })
    };

    const handleVerifyUser = (id) => {
        const verifyStatus = {
            verified: true,
        }

        fetch(`https://bookbearer-server.vercel.app/users/seller/verify/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(verifyStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                    toast.success('User Verification Success')
                }
            })

    };

    return (
        <tr>
            <td>
                <img className='h-24 w-24 rounded-full' src={image} alt="avatar" />
            </td>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <th>
                <button onClick={() => handleDeleteUser(_id)} className="btn">Delete</button>

                {
                    verified ? <span className='ml-2 bg-green-600 text-white p-3 rounded'>Verified</span> :
                        <button onClick={() => handleVerifyUser(_id)} className="ml-2 btn">Verify</button>
                }
            </th>
        </tr>
    );
};

export default SellerCard;