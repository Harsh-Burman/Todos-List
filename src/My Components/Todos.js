import React from 'react'
import Todo from "../My Components/Todo";

const Todos = (props) => {
  let myStyle={
    minHeight:"80vh",
    margin:"50px auto"
  }
  return (
    <div className="container" style={myStyle}>
        <h3 className="text-center my-3">Todos List</h3>
        {props.todos.length===0?"No Todos to display":
        props.todos.map((todo)=>{
            return(
              
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
              
            )
        })
        }
    </div>
  )
}

export default Todos
