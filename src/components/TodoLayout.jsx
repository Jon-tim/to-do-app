import React, { useContext, useState } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { ThemeStatus } from "../context/ThemeContext";
import SingleBox from "./SingleBox";

function TodoLayout() {
  const { theme, setTheme } = useContext(ThemeStatus);

  return (
    <>
      <section className="relative h-[90%] w-[90%] m-auto">
        <div className="flex items-center justify-between">
          <h1 className="uppercase font-bold text-3xl tracking-[.7rem] text-VeryLightGray my-10">
            todo
          </h1>
          <span className="" onClick={() => setTheme((prev) => !prev)}>
            <img src={theme ? sun : moon} alt="moon icon" />
          </span>
        </div>
        <SingleBox />
      </section>
    </>
  );
}

export default TodoLayout;
