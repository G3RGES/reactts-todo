import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const newTodoCtx = useContext(TodosContext);

  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextRef.current?.value;

    //* ONLY USE THIS IF I'M SURE THE ref WILL NEVER BE NULL
    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    // props.onAddTodo(enteredText);
    newTodoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
