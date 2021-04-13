import React from 'react';
import './main.styles.css';

const Main = ({ children }) => (
    <div className='d-flex main'>
        {children}
    </div>
)

export default Main;