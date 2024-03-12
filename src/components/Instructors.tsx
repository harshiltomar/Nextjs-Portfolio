"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import AWS from "../../public/techstack/AWS.png";
import CSS3 from "../../public/techstack/CSS3.jpg";
import Docker from "../../public/techstack/Docker.png";
import Expressjs from "../../public/techstack/Express.png";
import GraphQL from "../../public/techstack/GraphQL.png";
import HTML from "../../public/techstack/HTML.png";
import Javascript from "../../public/techstack/Javascript.png";
import MongoDB from "../../public/techstack/MongoDB.png";
import NextJS from "../../public/techstack/NextJS.png";
import NodeJS from "../../public/techstack/NodeJS.png";
import PostGre from "../../public/techstack/PostGre.png";
import React from "../../public/techstack/React.png";
import Tailwind from "../../public/techstack/Tailwind.png";
import Typescript from "../../public/techstack/Typescript.png";

const instructors = [
  {
    id: 1,
    name: "HTML",
    image: HTML,
  },
  {
    id: 2,
    name: "CSS",
    image: CSS3,
  },
  {
    id: 14,
    name: "Javascript",
    image: Javascript,
  },
  {
    id: 3,
    name: "MongoDB",
    image: MongoDB,
  },
  {
    id: 4,
    name: "Express.js",
    image: Expressjs,
  },
  {
    id: 5,
    name: "React.js",
    image: React,
  },
  {
    id: 6,
    name: "Node.js",
    image: NodeJS,
  },
  {
    id: 7,
    name: "Next.js",
    image: NextJS,
  },
  {
    id: 8,
    name: "Typescript",
    image: Typescript,
  },
  {
    id: 9,
    name: "Tailwind",
    image: Tailwind,
  },
  {
    id: 10,
    name: "PostGre",
    image: PostGre,
  },
  {
    id: 11,
    name: "graphQL",
    image: GraphQL,
  },
  {
    id: 12,
    name: "AWS",
    image: AWS,
  },
  {
    id: 13,
    name: "Docker",
    image: Docker,
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          My TechStack
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Here are few amazing technologies I have worked with and deep-dived
          into
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
