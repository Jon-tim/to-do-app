import React from "react";
import close from "../assets/images/icon-cross.svg";

function SingleToDo({ task, deleteFn, index }) {
  return (
    <div className="single px-5 h-[60px] flex items-center justify-between cursor-pointer">
      <div className="flex">
        <span className="border-LightDarkGrayishBlue block border-2 w-[20px] h-[20px] rounded-full mr-5"></span>
        <p>{task}</p>
      </div>
      <img
        src={close}
        alt="close icon"
        className=""
        onClick={() => deleteFn(index)}
      />
    </div>
  );
}

export default SingleToDo;
