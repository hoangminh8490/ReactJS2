import React, { useState } from 'react';

const ListUser = () => {
    const [count, setCount] = useState(0);

    const handleCLick = () =>{
        setCount(count+1)
    }

    return (
        <>
        <div>
            {count}
        </div>
        <button onClick={handleCLick}>Click me</button>
        </>
    );
};

export default ListUser;