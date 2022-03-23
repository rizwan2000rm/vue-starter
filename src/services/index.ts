import axios from "axios";

export interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getAllTodos(): Promise<TodoType[]> {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
}
