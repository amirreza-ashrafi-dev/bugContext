import React, { useContext } from 'react';
import './bugs.styles.css';
import Cart from '../cart/cart.component';
import BugsList from '../../context/bugsList.contax';

const Bugs = () => {
    const { bugs } = useContext(BugsList);
    return (
        <div className='w-100 bugs p-4'>{
            bugs.map((bug) => (
                <Cart {...bug} key={bug.bugName} />
            ))
        }</div>
    )
}

export default Bugs