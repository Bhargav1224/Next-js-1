import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
function TodoDetails() {
  const router = useRouter();
  const { todosId } = router.query;
  const [value, setValue] = useState(null);
  let key = "todos";
  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      const result = JSON.parse(stickyValue);
      result.filter((todos) => (todos.id === todosId ? setValue(todos) : null));
    }
  }, [key]);

  const handleClick = () => {
    router.push("/todos");
  };
  return (
    <>
      <h1>Title: {value?.title}</h1>
      <h1>Completed {value?.completed ? ": YES" : ": NO"}</h1>
      <button onClick={handleClick} className={styles.button}>
        GO BACK TO TODO PAGE
      </button>
    </>
  );
}

export default TodoDetails;
