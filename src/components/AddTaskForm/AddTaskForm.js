import React from 'react';

const AddTaskForm = props => {
    return (
        <div>
            <input type="text" className="border border-blue-600" onChange={props.onAddText}/>
            <button className="p-2 bg-purple-950 text-white rounded ml-5" onClick={props.onAddNewPerson}>ADD</button>
        </div>
    );
};

export default AddTaskForm;