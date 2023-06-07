import React from 'react';

const Person = props => {
    return (
        <div className="w-1/3 text-center border-2 border-blue-600">
            <h1 onClick={props.onHeaderClick} className="font-bold">{props.name}</h1>
            <i>{props.id}</i>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <p><input className="border border-blue-600" type="text" value={props.name} onChange={props.onNameChange}/></p>
            <button onClick={props.onDelete} className="bg-red-700 p-2 m-3 text-white">DELETE</button>
        </div>
    );
};

export default Person;