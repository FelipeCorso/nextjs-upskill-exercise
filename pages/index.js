import Head from "next/head";
import { MongoClient } from "mongodb";
import styles from "../styles/Home.module.css";
import TodosList from "../components/TodosList";

export default function Home({ todos }) {
  return (
    <>
      <Head>
        <title>Upskill Next App</title>
        <meta name="description" content="Mindera upskill course for NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TodosList todos={todos}></TodosList>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const client = await MongoClient.connect("{mongodb.credential.URL}");

  const db = client.db();

  const todosCollection = db.collection("todos");

  const todos = await todosCollection.find({ completed: false }).toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => {
        const { _id: id, ...todoProps } = todo;
        return {
          id: id.toString(),
          ...todoProps,
        };
      }),
    },
  };
};
