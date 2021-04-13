import React, { useState, useEffect } from 'react';
import BugList from '../context/bugsList.contax';

const BugsProvider = ({ children }) => {
    const [bugs, setBugs] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // return console.log('rerender component')
    }, [count])

    const addBug = (bug) => {
        let olgBugs = bugs;
        olgBugs.push(bug);
        setBugs(olgBugs);
        setCount(count + 1);
    }

    const removeBug = (title) => {
        const filteredBug = bugs.filter((bug) => bug.bugName !== title);
        setBugs(filteredBug);
        setCount(count - 1);
    }

    return (
        <BugList.Provider value={{ bugs: bugs, addBug: addBug, count: count, removeBug: removeBug }}>{children}</BugList.Provider>
    )

}

export default BugsProvider;