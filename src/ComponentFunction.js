import React from 'react';

const ComponentFunction = (props) => {
    return (
        <div>
            <ul></ul>
            {props.id?
              props.id.map((ids)=>
                 <li>{ids}</li>
              ) :''
            }
        </div>
    );
};

export default ComponentFunction;