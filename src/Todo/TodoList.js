import React from "react"
import PropTupes from "prop-types"
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <ul style = {styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo = {todo} key ={todo.id} index = {index} onChenge={props.onToggle}></TodoItem>
                })}
        </ul>
    )
}
TodoList.propTupes ={
    todos: PropTupes.arrayOf(PropTupes.object).isRequired,
    onToggle: PropTupes.func.isRequired
}

export default TodoList