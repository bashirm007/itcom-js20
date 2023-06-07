import React from 'react';
import Person from "../Person/Person";

const People = (props) => {

    return props.people.map(person => (
        <Person
            key={person.id}
            name={person.name}
            id={person.id}
            age={person.age}
            onNameChange={e=> props.onNameChange(person.id, e.target.value)}
            onHeaderClick={() => props.onHeaderClick(person.id)}
            onDelete={() => props.onDelete(person.id)}
        >
            {person.hobby}
        </Person>
    ))
};

export default People;