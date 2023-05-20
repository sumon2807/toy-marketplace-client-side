import React from 'react';

const OrderTable = ({ order }) => {
    const { detail, photo, price, toyName, quantity } = order;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-40 rounded">
                        <img className='' src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {toyName}
                <br />
                <span className="badge badge-ghost badge-sm">{detail}</span>
            </td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{quantity}</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
        </tr>
    );
};

export default OrderTable;