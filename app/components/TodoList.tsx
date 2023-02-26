import { type } from "os";
import React from "react";
import { MdDelete } from "react-icons/md";

// export interface Todo

type prop = {
  todo: { id: number; text: string; isCompleted: boolean };
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
};

// const TodoList = ({ id, text, isCompleted }: prop) => {
const TodoList = ({ todo, handleDone, handleDelete }: prop) => {
  return (
    <div
      className={`flex items-center justify-center h-10 w-3/6 px-4 rounded-lg ${
        todo.isCompleted ? "bg-green-300" : "bg-gray-300"
      }`}
    >
      <input
        type="checkbox"
        className="mr-5 h-4 w-4 accent-green-400"
        size={70}
        onClick={() => handleDone(todo.id)}
      />
      <h1 className={`flex-1  ${todo.isCompleted ? "line-through" : ""}`}>
        {todo.text}
      </h1>
      <MdDelete size={28} color="red" onClick={() => handleDelete(todo.id)} />
    </div>
  );
};

export default TodoList;
