import React from 'react';

const TodoForm = props => {
    return(
        <form className={style.form} onSubmit={props.add}>
            <fieldset className={style.fieldset}>
                <legend>What are your plans for today?</legend>
	            <input 
		            type="text"
		            value={props.value}
                    onChange={props.handleChange}
                    placeholder="Enter what to do"
                />
            </fieldset>
        </form>
    )
}

export default TodoForm;