import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ data, setTodos }) => {
  return (
      <div className='todo-container'>
        <ul className='todo-list'>
            {data.length > 0 && data.map((item) => (
                <TodoItem 
                    setTodos={setTodos} 
                    data={data} 
                    item={item} 
                    key={item.id} 
                />
            ))}
        </ul>
      </div>
  );
};

export default TodoList;
