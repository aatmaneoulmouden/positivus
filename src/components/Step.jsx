import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Step = ({ id, isActive, handleClick, index, title, description }) => {
  return (
    <article
      className={`border border-black rounded-[45px] p-[30px] lg:py-10 lg:px-[50px] shadow-base ${
        isActive ? "bg-green" : "bg-gray"
      }`}
    >
      <div className="step-header flex justify-between items-center gap-7">
        <div className="flex items-center gap-8 lg:gap-6">
          <span className="step-index text-3xl lg:text-6xl font-medium">
            {index}
          </span>
          <h4 className="step-title text-lg lg:text-3xl font-medium">
            {title}
          </h4>
        </div>
        <div
          className="min-w-[30px] lg:w-[58px] h-[30px] lg:h-[58px] border border-black rounded-full flex justify-center items-center bg-gray cursor-pointer"
          onClick={() => handleClick(id)}
        >
          {isActive ? (
            <FaMinus className="text-lg lg:text-3xl" />
          ) : (
            <FaPlus className="text-lg lg:text-3xl" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="step-body pt-[30px] mt-[30px] border-t-2 border-black">
          <p className="text-lg">{description}</p>
        </div>
      )}
    </article>
  );
};

export default Step;
