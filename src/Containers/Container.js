import React, {useState} from 'react';
import Person from "../components/Person/Person";
import {nanoid} from "nanoid";
import AddTaskForm from "../components/AddTaskForm/AddTaskForm";

const Container = () => {
    const [people, setPeople] = useState([
        {name: 'Dmitrii', age: 30, hobby: 'Reading books', id:nanoid()},
        {name: 'John', age: 25, hobby: 'Video games', id:nanoid()},
    ]);

    const currentPerson = {name:'', age: Math.floor(Math.random() * 70) - 1 , id: nanoid()};

    const changePerson = (value) => {
        currentPerson.name = value;
        console.log(currentPerson);
        return currentPerson.name;
    }

    const addNewPerson = () => {
        setPeople([...people, currentPerson])
    }

    const increaseAge = id => {
        console.log(id);
        const peopleCopy = people.map(person => {
            if(person.id === id) {
                return {
                    ...person,
                    age: person.age + 1,
                }
            }
            return person;
        });
        setPeople(peopleCopy);
    };

    const addPerson = () => {
        const newPerson = {name: 'Bob', age: 17, hobby: 'Reading books', id:nanoid()};
        setPeople([...people, newPerson]);
    }

    const deletePerson = id => {
        setPeople(people.filter(person => person.id !== id));
    }

    const changeName = (id, value) => {
        console.log('id: ' + id + ' value: ' + value);
        const peopleCopy = people.map(person => {
            if(person.id === id) {
                return {
                    ...person,
                    name: value,
                }
            }
            return person;
        });
        setPeople(peopleCopy);
    }


    const peopleComponents = people.map(person => (
        <Person
            key={person.id}
            name={person.name}
            id={person.id}
            age={person.age}
            onHeaderClick={() => increaseAge(person.id)}
            onNameChange={e => changeName(person.id, e.target.value)}
            onDelete={() => deletePerson(person.id)}
        >
            {person.hobby}
        </Person>
    ))

    return (
        <div>
            <div className="text-center">
                <AddTaskForm
                    onAddText={e => changePerson(e.target.value)}
                    onAddNewPerson={addNewPerson}
                />
            </div>
            <div className="flex flex-row flex-wrap mb-5">
                {peopleComponents}
            </div>
            <div className="text-center">
                <button onClick={addPerson} className="bg-blue-700 p-3 text-white">Add person</button>
            </div>
        </div>
    );
};

export default Container;
