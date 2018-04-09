import React from 'react';

const Todo = props => {
    return (
        <li>
            <button className={style.btn} onClick={() => props.remove(props.id)}>
                X
            </button>
            {props.text}
        </li>
    )
}

export default Todo;