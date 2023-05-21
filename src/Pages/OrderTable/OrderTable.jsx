import React from 'react';

const OrderTable = ({ order, handleDelete, handleUpdate }) => {
    const {_id, detail, photo, price, toyName, quantity, status } = order;
     
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-40 rounded">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
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
                {status === 'updated' ? <span className='font-bold text-green-600'>Updated</span> :
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Update</button>
                    }
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default OrderTable;