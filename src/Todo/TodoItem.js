import React, {useContext} from "react"
import PropTupes from "prop-types"
import Context from "../context"

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: ".5rem"
    },
    input: {
        marginRight: "1rem"
    }
}

function TodoItem({todo,index , onChenge}) {
    const {removeTodo} = useContext (Context)
    const classes = []

    if (todo.comleted) {
        classes.push("done")
    }
    return (
        <li style = {styles.li}>
            <span className = {classes.join(" ")}>
                <input 
                type ="checkbox" 
                checked = {todo.comleted}
                style={styles.input} 
                onChange ={()=>onChenge(todo.id)}
                ></input>
                <strong>{index +1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className ="rm" onClick = {removeTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTupes ={
    todos: PropTupes.object.isRequired,
    index: PropTupes.number,
    onChenge: PropTupes.func.isRequired,
}

export default TodoItem