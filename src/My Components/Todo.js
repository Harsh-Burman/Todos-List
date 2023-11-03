import React from 'react'

const Todo = ({todo, onDelete}) => {
  let myStyle={
    display:"inline",
    padding:"8px"
  }
  return (
    <>
    <div>
        <input type="checkbox" name="Hello" value={todo.title} style={myStyle}/>
        <h4 style={myStyle}>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete </button>
    </div>
    <hr />
    </>
  )
}

export default Todo
