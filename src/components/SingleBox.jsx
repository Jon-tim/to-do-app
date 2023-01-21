import React, { useState } from "react";
import { useRef } from "react";
import SingleToDo from "./SingleToDo";
function SingleBox() {
  const todoValue = useRef(null);
  const [todos, setTodos] = useState([]);

  const handleTask = (event) => {
    const newTodo = todos;
    if (todoValue.current.value.length > 0) {
      newTodo.push(todoValue.current.value);
      setTodos((prevTodo) => [...newTodo]);
      todoValue.current.value = "";
    }
  };

  const deleteSingleTodo = (arg) => {
    const minusClosed = todos.filter((todo, index) => index !== arg);
    setTodos(minusClosed);
  };
  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-4 w-full bg-VeryLightGray px-5 h-[60px] rounded-md mb-5">
        <div className="flex items-center ">
          <span className="border-LightDarkGrayishBlue block border-2 w-[20px] h-[20px] rounded-full mr-5"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="h-full  text-sm bg-transparent outline-none"
            ref={todoValue}
          />
          <button
            type="submit"
            onClick={handleTask}
            className="text-LightGrayishBlue bg-green-600 h-full w-[50px]"
          >
            +
          </button>
        </div>
      </div>
      <section className=" rounded-md bg-VeryLightGray">
        {todos.map((todo, index) => (
          <SingleToDo
            task={todo}
            key={index}
            deleteFn={deleteSingleTodo}
            index={index}
          />
        ))}
        <div className="single h-[60px] px-5 mb-5 flex items-center justify-between text-DarkGrayishBlue">
          <p>{todos.length} items left</p>
          <p>Clear Completed</p>
        </div>
      </section>
      <section className="rounded-md  h-[60px] px-5 flex items-center justify-center gap-5  bg-VeryLightGray">
        <p className="cursor-pointer text-DarkGrayishBlue hover:text-red-50">
          All
        </p>
        <p className="cursor-pointer text-DarkGrayishBlue hover:text-LightGrayishBlueHover">
          Active
        </p>
        <p className="cursor-pointer text-DarkGrayishBlue hover:text-LightGrayishBlueHover">
          Completed
        </p>
      </section>
    </div>
  );
}

export default SingleBox;
