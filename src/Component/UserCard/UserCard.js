import React from 'react';

const UserCard = ({ user }) => {
    const { name, email } = user;


    return (
        <tr>
            <td>
                <img className='h-24 w-24 rounded-full' src="aakhs.com" alt="avatar" />
            </td>
            <td>
                {name}
            </td>
            <td>{email}</td>
            <th>
                <button className="btn">Delete</button>
            </th>
        </tr>
    );
};

export default UserCard;