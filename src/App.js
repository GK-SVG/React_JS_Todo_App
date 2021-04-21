import './App.css';
import Header from "./Components/Header"
import Todos from "./Components/Todos"
import Footer from "./Components/Footer"
import About from "./Components/About"

import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  function onDelete(todo) {
    console.log("onDelete Clicked", todo)
    let localTodo = localStorage.getItem("todos")
    console.log(localTodo)
    setTodos(myTodos.filter((e) => {
      return e !== todo;
    }))
  }
  function addTodo(title, desc) {

    console.log("submit clicked", title, desc)
    let sno;
    if (myTodos.length === 0) {
      sno = 0
    }
    else {
      sno = myTodos[myTodos.length-1].sno+1
    }
    const myNewTodo = {
      sno: sno + 1,
      title: title,
      desc: desc
    }

    setTodos([...myTodos, myNewTodo])
  }
  const [myTodos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(myTodos))
  }, [myTodos])
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Todos myTodos={myTodos} onDelete={onDelete} addTodo={addTodo} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
