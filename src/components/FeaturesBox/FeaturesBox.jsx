import React from "react";

function FeaturesBox(props) {
  let { title, description, icon } = props;

  return (
    <div className=" shadow-2xl bg-[#ECF1FF] rounded-[15px] flex flex-col justify-center items-center text-center p-3 space-y-8 text-[#1D154B] h-[325px] w-[325px]">
      <div className="bg-custom-gradient p-6 rounded">
        <span>{icon}</span>
      </div>
      <div className="text-2xl font-extrabold">
        <span>{title}</span>
      </div>
      <div className="text-xl">
        <span>{description}</span>
      </div>
    </div>
  );
}

export default FeaturesBox;
