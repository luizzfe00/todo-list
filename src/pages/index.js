import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

const HomePage = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const handleFilter = () => {
            let filtered = [...todos];
            switch (filter) {
                case 'completed':
                    filtered = todos.filter((todo) => todo.completed === true);
                    setFilteredTodos(filtered);
                    return;
                case 'uncompleted':
                    filtered = todos.filter((todo) => todo.completed === false);
                    setFilteredTodos(filtered);
                    return;
                default:
                    setFilteredTodos(filtered);
                    return;
            }
        }

        handleFilter()
    }, [filter, todos])

    

    return (
        <div>
            <header>
                <h1>My Todo List</h1>
            </header>
            <Form 
                setInputText={(value) => setInputText(value)} 
                inputText={inputText} 
                todos={todos} 
                setTodos={(value) => setTodos(value)} 
                setFilter={(value) => setFilter(value)}
                filter={filter}
            />
            <TodoList 
                data={filteredTodos} 
                setTodos={(value) => setTodos(value)}
            />
        </div>
    );
};

export default HomePage;
