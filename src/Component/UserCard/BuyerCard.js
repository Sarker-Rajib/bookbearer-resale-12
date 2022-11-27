import React from 'react';
import toast from 'react-hot-toast';

const BuyerCard = ({ buyer, refetch }) => {
    const { name, email, image, _id } = buyer;

    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
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
            </th>
        </tr>
    );
};

export default BuyerCard;