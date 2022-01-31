import React from 'react';

const TodoItem = ({ data, item, setTodos }) => {

    const handleDelete = () => {
        const updatedTodos = data.filter(todo => todo.id !== item.id)
        setTodos(updatedTodos);
    }

    const handleCompleteItem = () => {
        const updatedTodos = data.map((todo) => {
            if (todo.id === item.id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            };

            return todo;
        });

        setTodos(updatedTodos);
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>{item.text}</li>
            <button className='complete-btn' onClick={handleCompleteItem}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={handleDelete}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default TodoItem;
