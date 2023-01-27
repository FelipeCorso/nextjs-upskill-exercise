import Head from "next/head";
import { useRouter } from "next/router";
import NewTodoForm from "../components/NewTodoForm";
import classes from "../styles/AddNew.module.css";

const AddNewTodoPage = () => {
  const router = useRouter();
  async function addTodoHandler(enteredTodoData) {
    const res = await fetch("/api/create-todo", {
      method: "POST",
      body: JSON.stringify({ ...enteredTodoData, completed: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add New Todo</title>
        <meta
          name="description"
          content="Page for adding a new Todo to our infrastructure"
        />
      </Head>

      <div>
        <p className={classes.container}>Page for creating a new Global todo</p>
        <p className={classes.container}>
          If you&apos;d like to change the world but you&apos;re a thinker, not
          a doer, add to the list of todos and someone will do it, if
          you&apos;re a doer and not a thinker, go back to the homepage and grab
          something to do
        </p>
        <NewTodoForm onAddTodo={addTodoHandler} />
      </div>
    </>
  );
};

export default AddNewTodoPage;
