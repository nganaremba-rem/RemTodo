import axios from "axios";
import { endpoints } from "../../endpoints";

const Axios = axios.create({
  baseURL: "https://mytodoappbackend-production.up.railway.app/",
});

export const getTodos = () => Axios.get(endpoints.getTodos);

export const getTodoById = (id) => Axios.get(`${endpoints.getTodoById}/${id}`);

export const createTodo = (data) => Axios.post(endpoints.createTodo, data);

export const updateTodo = (data, id) =>
  Axios.patch(`${endpoints.updateTodo}/${id}`, data);

export const deleteTodo = (id) => Axios.delete(`${endpoints.deleteTodo}/${id}`);
