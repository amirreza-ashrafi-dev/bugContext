import React, { useState, useContext } from 'react';
import BugsList from '../../context/bugsList.contax';

const AddBug = () => {

    const [bugInfo, setBugInfo] = useState({ bugName: '', bugDescription: '', bugLevel: '' });
    const Bugs = useContext(BugsList);

    const setBug = (e) => {
        return setBugInfo({ ...bugInfo, [e.target.name]: e.target.value });
    }

    const AddBug = () => {
        Bugs.addBug(bugInfo);
        console.log(Bugs.bugs);
    }

    return (
        <form className='w-100 d-flex flex-column justify-content-center p-4' onSubmit={(e) => {
            e.preventDefault();
            AddBug()
        }}>
            <div className='form-group'>
                <input type="text" className='form-control' placeholder='type your bug name...' name='bugName' onChange={setBug} />
            </div>
            <br />
            <div className='form-group'>
                <input type="text" className='form-control' placeholder='type your bug description...' name='bugDescription' onChange={setBug} />
            </div>
            <br />
            <div className='form-group'>
                <input type="text" className='form-control' placeholder='type your bug level number...' name='bugLevel' onChange={setBug} />
            </div>
            <br />
            <button className='btn btn-danger'>AddBug!!!</button>
        </form>
    )
}

export default AddBug;