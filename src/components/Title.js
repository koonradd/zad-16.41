import React from 'react';


const Title = props => {
    return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <h2>{props.taskLength} tasks</h2>
        </div>
    )
}

export default Title;