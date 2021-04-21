import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="container border my-3 py-3">
            <h3>{props.todo.title}</h3>
            <p>{props.todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={props.onDelete}>Delete</button>
        </div>
    )
}
