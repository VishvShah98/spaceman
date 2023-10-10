import React from "react";

function ChallengeBox(props) {
  const { challengeNumber, challengeMainPara, challengeSubPara, boxColor, textColor } =
    props;

  return (
    <div
      style={{ background: boxColor }}
      className="p-6 md:pl-[375px] lg:pl-[450px] flex flex-col justify-around items-left rounded-[20px] h-[375px] w-[325px] md:h-[500px] md:w-[700px] lg:h-[550px] lg:w-[1100px]"
    >
      <div className="text-lg lg:text-3xl font-extrabold" style={{color:textColor[0]}}>
        <span>{challengeNumber}</span>
      </div>
      <div className="text-white text-lg lg:text-3xl font-extrabold">
        <span>{challengeMainPara}</span>
      </div>
      <div className="text-md lg:text-lg" style={{color:textColor[1]}}>
        <span>{challengeSubPara}</span>
      </div>
    </div>
  );
}

export default ChallengeBox;
