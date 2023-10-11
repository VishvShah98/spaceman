import React from "react";
import { motion } from "framer-motion";
import team_1 from "../assets/team-1.webp";
import team_2 from "../assets/team-2.webp";
import team_3 from "../assets/team-3.webp";

function TeamMember({ src, alt, name, role }) {
  const containerVariants = {
    hover: { y: -10 },
    initial: { y: 0 }
  };

  const infoVariants = {
    hover: { opacity: 1 },
    initial: { opacity: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      className="h-[375px] w-[375px] relative cursor-pointer lg:hover:opacity-100"
    >
      <img
        style={{ borderRadius: "20px" }}
        src={src}
        alt={alt}
      />
      <motion.div
        className="text-center absolute bottom-12 left-0 right-0 text-white lg:opacity-0"
        variants={infoVariants}
      >
        <div className="text-3xl font-extrabold">{name}</div>
        <div className="text-xl pt-4">{role}</div>
      </motion.div>
    </motion.div>
  );
}

function Team() {
  return (
    <div className="bg-[#ECF1FF] leading-tight pt-72 pb-72">
      <div className="text-center uppercase mb-4">
        <span id="team" className="text-[#EF106E] text-md md:text-lg font-bold">
          Who made it
        </span>
      </div>
      <div className="text-center mb-5 md:mb-20 lg:mb-28">
        <span className="text-3xl md:text-7xl text-[#1D154B] font-black uppercase tracking-tighter">
          Meet the team
        </span>
      </div>
      <div className="flex flex-col justify-around items-center space-y-32 lg:flex-row lg:space-y-0 lg:justify-center lg:space-x-4">
        <TeamMember
          src={team_1}
          alt="Member 1"
          name="Chasity Jones"
          role="Founder"
        />
        <TeamMember
          src={team_2}
          alt="Member 2"
          name="David Knoxville"
          role="Lead Developer"
        />
        <TeamMember
          src={team_3}
          alt="Member 3"
          name="Chris Ericson"
          role="Designer"
        />
      </div>
    </div>
  );
}

export default Team;
