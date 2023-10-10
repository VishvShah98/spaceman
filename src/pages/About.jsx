import Carousel from "../components/Carousel/Carousel";
import bg from "../assets/app-screen5.webp";
import Phone from "../components/Phone/Phone";
import ChallengeBox from "../components/ChallengeBox/ChallengeBox";

function About() {
  const boxColor1 =
    "linear-gradient(130deg, rgb(239, 10, 106) 0%, rgb(182, 53, 156) 100%)";
  const boxColor2 = "linear-gradient(to right bottom, #1C1449, #0D0531)";
  const textColor1 = ["#EE8CBD", "#F1BDDB"];
  const textColor2 = ["#8C88A1", "#9D9AAE"];

  // Create an array of props for ChallengeBox component
  const challengePropsArray = [
    {
      challengeNumber: "01",
      challengeMainPara:
        "Creating an appealing app landing page can be a challenge. This app website template for Slider Revolution makes the process a breeze",
      challengeSubPara:
        "Showcase your work in a professional way with a mobile app website template that is visually stunning and easy to customize.",
      boxColor: boxColor1, // Example color
      textColor: textColor1,
    },
    {
      challengeNumber: "02",
      challengeMainPara:
        "Creating an appealing app landing page can be a challenge. This app website template for Slider Revolution makes the process a breeze",
      challengeSubPara:
        "Showcase your work in a professional way with a mobile app website template that is visually stunning and easy to customize.",
      boxColor: boxColor2, // Example color
      textColor: textColor2,
    },
    {
      challengeNumber: "03",
      challengeMainPara:
        "Creating an appealing app landing page can be a challenge. This app website template for Slider Revolution makes the process a breeze",
      challengeSubPara:
        "Showcase your work in a professional way with a mobile app website template that is visually stunning and easy to customize.",
      boxColor: boxColor1, // Example color
      textColor: textColor1,
    },
    // Add more sets of props as needed
  ];

  return (
    <div className="bg-[#ECF1FF] leading-tight">
      <div className="text-center uppercase mb-4">
        <span className="text-[#EF106E] text-md md:text-lg font-bold">
          About the App
        </span>
      </div>
      <div className="text-center mb-5 md:mb-20 lg:mb-28">
        <span className="text-3xl md:text-7xl text-[#1D154B] font-black uppercase tracking-tighter">
          The Challenge
        </span>
      </div>
      <Carousel
        CarouselData={challengePropsArray.map((props, index) => (
          <ChallengeBox key={index} {...props} />
        ))}
      />
      <div className="relative h-0">
        <div className="flex justify-center items-center bg-transparent">
          <div className="hidden md:block md:-mt-[725px] md:-ml-[325px] lg:hidden z-10">
            <Phone type="small" backgroundImage={bg} />
          </div>
          <div className="hidden lg:block lg:-mt-[775px] lg:-ml-[600px] z-10">
            <Phone type="medium" backgroundImage={bg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
