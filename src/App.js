import './App.css';
import Header from './My Components/Header';
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";
import AddTodo from "./My Components/AddTodo";
import About from "./My Components/About";
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    // console.log("I am on Delete of todo ", todo)

    // Deleting this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    // console.log("Adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // return (
  //   <>
  //       <Header title="  My Todos List" searchBar={true} />
  //       <AddTodo addTodo={addTodo} />
  //       <Todos todos={todos} onDelete={onDelete} />
  //       <Footer />
  //   </>
  // );
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <>
        <Header title="  My Todos List" searchBar={true} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </>
      ),
    },
    {
      path: "about",
      element: <About title="  My Todos List" searchBar={true}/>,
    },
  ]);
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
