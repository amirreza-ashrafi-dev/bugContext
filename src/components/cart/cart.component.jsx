import React, { useContext } from 'react';
import BugList from '../../context/bugsList.contax';
import './cart.styles.css'

const Cart = ({ bugName, bugDescription, bugLevel }) => {
    const Bug = useContext(BugList);
    return (
        <div className='cart-wrapper p-2 mb-5'>
            <h2>{bugName}</h2>
            <p>{bugDescription}</p>
            <button className='btn btn-danger' onClick={() => Bug.removeBug(bugName)}>{bugLevel}</button>
        </div>
    )
};

export default Cart;