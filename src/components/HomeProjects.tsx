"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "Taskify",
    link: "https://gomoonbeam.com",
    thumbnail: "/courses/Taskify.JPG",
  },
  {
    title: "Marked",
    link: "https://cursor.so",
    thumbnail: "/courses/marked.JPG",
  },
  {
    title: "NetflixGPT",
    link: "https://userogue.com",
    thumbnail: "/courses/Netflix.JPG",
  },

  {
    title: "Music-Edtech",
    link: "https://editorially.org",
    thumbnail: "/courses/Music-tech.JPG",
  },
  {
    title: "HARTdraws",
    link: "https://editrix.ai",
    thumbnail: "/courses/Hartdraws.JPG",
  },
  {
    title: "Foodify",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/courses/Foodify.JPG",
  },

  {
    title: "Spotline",
    link: "https://spotline.org",
    thumbnail: "/courses/Spotline.JPG",
  },
  {
    title: "Youtube Clone",
    link: "",
    thumbnail: "/courses/Youtube.JPG",
  },
  {
    title: "Taskify1",
    link: "https://gomoonbeam.com",
    thumbnail: "/courses/Taskify.JPG",
  },
  {
    title: "Marked1",
    link: "https://cursor.so",
    thumbnail: "/courses/marked.JPG",
  },
  {
    title: "NetflixGPT1",
    link: "https://userogue.com",
    thumbnail: "/courses/Netflix.JPG",
  },

  {
    title: "Music-Edtech1",
    link: "https://editorially.org",
    thumbnail: "/courses/Music-tech.JPG",
  },
  {
    title: "HARTdraws1",
    link: "https://editrix.ai",
    thumbnail: "/courses/Hartdraws.JPG",
  },
  {
    title: "Foodify1",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/courses/Foodify.JPG",
  },

  {
    title: "Spotline1",
    link: "https://spotline.org",
    thumbnail: "/courses/Spotline.JPG",
  },
  {
    title: "Youtube Clone1",
    link: "",
    thumbnail: "/courses/Youtube.JPG",
  },
];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
