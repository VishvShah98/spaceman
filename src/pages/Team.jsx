import React from "react";
import team_1 from "../assets/team-1.webp";
import team_2 from "../assets/team-2.webp";
import team_3 from "../assets/team-3.webp";
function Team() {
  return (
    <div className="bg-[#ECF1FF] leading-tight pt-72 pb-72">
      <div className="text-center uppercase mb-4">
        <span className="text-[#EF106E] text-md md:text-lg font-bold">
          Who made it
        </span>
      </div>
      <div className="text-center mb-5 md:mb-20 lg:mb-28">
        <span className="text-3xl md:text-7xl text-[#1D154B] font-black uppercase tracking-tighter">
          Meet the team
        </span>
      </div>
      <div className="flex flex-col justify-around items-center space-y-32 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-4">
        <div className="h-[375px] w-[375px]">
          <button>
            <div style={{ position: "relative" }}>
              <img
                style={{ borderRadius: "20px" }}
                src={team_1}
                alt="Member 1"
              />
              <div className="text-center absolute bottom-12 left-0 right-0 text-white">
                <div className="text-3xl font-extrabold">
                  <span>Chasity Jones</span>
                </div>
                <div className="text-xl pt-4">
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="h-[375px] w-[375px]">
          <button>
            <div style={{ position: "relative" }}>
              <img
                style={{ borderRadius: "20px" }}
                src={team_2}
                alt="Member 2"
              />
              <div className="text-center absolute bottom-12 left-0 right-0 text-white">
                <div className="text-3xl font-extrabold">
                  <span>David Knoxville</span>
                </div>
                <div className="text-xl pt-4">
                  <span>Lead Developer</span>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="h-[375px] w-[375px]">
          <button>
            <div style={{ position: "relative" }}>
              <img
                style={{ borderRadius: "20px" }}
                src={team_3}
                alt="Member 3"
              />
              <div className="text-center absolute bottom-12 left-0 right-0 text-white">
                <div className="text-3xl font-extrabold">
                  <span>Chris Ericson</span>
                </div>
                <div className="text-xl pt-4">
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
