"use client";
import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import TodoList from "./TodoList";

const Container = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "hello",
      isCompleted: false,
    },
    {
      id: 2,
      text: "hello PAksistan",
      isCompleted: false,
    },
  ]);

  const [value, setValue] = useState("");

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleInput = () => {
    if (value === "") {
    }
    // console.log(value);
    else {
      let newtext = value;
      const newTodos = [
        ...todos,
        { id: Math.random(), text: newtext, isCompleted: false },
      ];
      setTodos(newTodos);
      setValue("");
    }
  };

  return (
    <div className="w-full -mt-24">
      <div className="w-5/6 mx-auto bg-[#d4d3d3]  flex items-center gap-8  flex-col rounded-lg min-h-[384px] shadow-2xl">
        <div className=" flex items-center justify-center h-10 w-5/6 px-4 mt-8 rounded-lg bg-white  ">
          <input
            type="text"
            maxLength={60}
            className="w-5/6 outline-none flex-1   caret-rose-600"
            placeholder="Enter Any Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                // setInputData(e.target.value);
                // inputData === '' ? alert("enter something"):
                // Dispatch(plus(inputData));
                // setInputData('')
                handleInput();
              }
            }}
          />
          <GrFormAdd size={35} color="blue" onClick={() => handleInput()} />
        </div>

        {/* <div className=" flex items-center justify-center h-10 w-3/6 px-4 rounded-lg bg-gray-100 ">
          <input
            type="checkbox"
            className="mr-5 h-4 w-4 accent-green-400"
            size={70}
          />
          <h1 className="flex-1">to do something </h1>
        </div> */}

        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
