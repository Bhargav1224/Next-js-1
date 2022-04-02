import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import styles from "./index.module.css";

// function for setting the values to localStorage;

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function Todos() {
  const [todos, setTodos] = useStickyState([], "todos");
  const [title, setTitle] = useState("");
  const addTodos = () => {
    const payload = {
      title,
      id: uuid(),
      completed: false,
    };
    setTodos([...todos, payload]);
    setTitle("");
  };
  return (
    <>
      <h1 className={styles.title}>WELCOME TO TODO GAME</h1>
      <div className={styles.container}>
        <div className={styles.container1}>
          <input
            type="text"
            className={styles.input}
            placeholder="Add something"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className={styles.button} onClick={addTodos}>
            A D D
          </button>
        </div>
        {todos?.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className={styles.todoscontainer}>
                <Link href={`/todos/${item.id}`}>{item.title}</Link>
                <button className={styles.completedBtn}>
                  {item.completed ? "completed" : "not completed"}
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Todos;
