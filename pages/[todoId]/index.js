import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { markAsDone } from "../../libs/mark-as-done";
import { useRouter } from "next/router";

const TodoDetailPage = ({ todo }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{todo.title}</title>
        <meta name="description" content={`${todo.description}`} />
      </Head>
      <div>
        <div>
          This page will give you the full details of the todo with id:{" "}
          {todo.id}
        </div>
        <div>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
          <button
            onClick={
              todo.completed ? () => {} : () => markAsDone(router, todo.id)
            }
          >
            {todo.completed ? "Done" : "Mark as Done"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoDetailPage;

export const getStaticPaths = async () => {
  const client = await MongoClient.connect("{mongodb.credential.URL}");

  const db = client.db();

  const todosCollection = db.collection("todos");

  const todos = await todosCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: todos.map((todo) => ({
      params: {
        todoId: todo._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const todoId = context.params.todoId;

  const client = await MongoClient.connect("{mongodb.credential.URL}");

  const db = client.db();

  const todosCollection = db.collection("todos");

  const selectedTodo = await todosCollection.findOne({ _id: ObjectId(todoId) });

  client.close();

  const { _id: id, ...selectedTodoProps } = selectedTodo;

  return {
    props: {
      todo: {
        id: id.toString(),
        ...selectedTodoProps,
      },
    },
    revalidate: 1,
  };
};
