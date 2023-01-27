import { useRouter } from "next/router";
import classes from "./TodosList.module.css";
import { markAsDone } from "../libs/mark-as-done";
import Link from "next/link";

const TodosList = ({ todos }) => {
  const router = useRouter();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className={classes.container}>
          <Link href={`${todo.id}`} className={classes.title}>
            {todo.title}
          </Link>
          <p>{todo.description}</p>

          <button
            className={
              todo.clompleted ? classes.completedButton : classes.button
            }
            onClick={() => markAsDone(router, todo.id)}
          >
            {todo.clompleted ? "Done" : "Mark as Done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
