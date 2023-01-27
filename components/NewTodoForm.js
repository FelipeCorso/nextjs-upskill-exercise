import { useRef } from "react";
import classes from "./NewTodoForm.module.css";

const NewTodoForm = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler() {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddTodo(todoData);
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Todo Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodoForm;
