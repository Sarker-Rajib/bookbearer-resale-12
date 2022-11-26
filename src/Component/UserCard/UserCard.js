import React from 'react';

const UserCard = ({ user }) => {
    const { name, email, image, _id } = user;

    const handleDeleteUser = (id) => {
        console.log(id);
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

export default UserCard;