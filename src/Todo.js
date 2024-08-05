import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, index, handleDeleteItem }) => {
    return (
        <li className="todo-item">
            <span>{todo}</span>
            <button onClick={() => handleDeleteItem(index)} className="delete-button">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
};

export default Todo;
