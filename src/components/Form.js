import React from 'react';

export const Form = ({ setInputText, inputText, todos, setTodos, setFilter, filter }) => {

    const handleInputTextChange = (event) => {
        const { value } = event.target;
        setInputText(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setInputText("");
    }

    const handleSelect = (event) => {
        const { value } = event.target;
        setFilter(value);
    };

    return (
        <form>
            <input type="text" className="todo-input" onChange={handleInputTextChange} value={inputText} />
            <button className="todo-button" type='submit' onClick={handleSubmit}>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select name="todos" className='filter-todo' value={filter} onChange={handleSelect}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
