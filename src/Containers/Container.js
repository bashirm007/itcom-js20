import React, {useState} from 'react';
import {nanoid} from "nanoid";
import AddTaskForm from "../components/AddTaskForm/AddTaskForm";
import People from "../components/People/People";
import ToggleButton from "../components/ToggleButton/ToggleButton";

const Container = () => {
    const [people, setPeople] = useState([
        {name: 'Dmitrii', age: 30, hobby: 'Reading books', id:nanoid()},
        {name: 'John', age: 25, hobby: 'Video games', id:nanoid()},
    ]);

    const [showPeople, setShowPeople] = useState(false);

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

    const togglePeople = () => {
        setShowPeople(!showPeople);
    }

    let peopleComponent = null;

    if(showPeople) {
        peopleComponent =  <People
            people={people}
            onHeaderClick={increaseAge}
            onNameChange={changeName}
            onDelete={deletePerson}
        />
    }


    return (
        <div>
            <div className="text-center">
                <AddTaskForm
                    onAddText={e => changePerson(e.target.value)}
                    onAddNewPerson={addNewPerson}
                />
            </div>
            <ToggleButton showPeople={showPeople} togglePeople={togglePeople}/>
            <div className="flex flex-row flex-wrap mb-5">
                {peopleComponent}
            </div>
            <div className="text-center">
                <button onClick={addPerson} className="bg-blue-700 p-3 text-white">Add person</button>
            </div>
        </div>
    );
};

export default Container;
