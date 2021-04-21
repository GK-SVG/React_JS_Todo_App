import React from 'react'
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo"

export default function Todos(props) {
    return (
        <div className="container">
      <AddTodo addTodo={props.addTodo}/>

            <h3 className="text-center my-4">My Todo List</h3>
            {props.myTodos.length===0? "No Work Pending" :
            props.myTodos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={()=>props.onDelete(todo)}/>
            })
            }
        </div>
    )
}
