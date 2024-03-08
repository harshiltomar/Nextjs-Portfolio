"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "The community and support at this school are unmatched. Ive grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. Im endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
  {
    quote:
      "I never imagined I could learn so much about music theory in such a short time. The instructors make learning fun and engaging!",
    name: "Jessica Adams",
    title: "Music Theory Student",
  },
  {
    quote:
      "The songwriting courses provided me with valuable insights and techniques that have greatly improved my songwriting abilities.",
    name: "David Martinez",
    title: "Songwriting Student",
  },
  {
    quote:
      "The drumming lessons are fantastic! The instructors break down complex rhythms into easy-to-understand concepts.",
    name: "Ryan Thompson",
    title: "Drumming Student",
  },
  {
    quote:
      "I have always been interested in jazz improvisation, and this course exceeded my expectations. It iss challenging but incredibly rewarding.",
    name: "Olivia Scott",
    title: "Jazz Improvisation Student",
  },
  {
    quote:
      "The electronic music production course is a game-changer. I have learned how to create professional-sounding tracks from scratch.",
    name: "Maxwell Davis",
    title: "Electronic Music Production Student",
  },
  {
    quote:
      "Exploring classical music history has been a fascinating journey. The lectures are insightful, and the resources provided are excellent.",
    name: "Sophia Nguyen",
    title: "Classical Music History Student",
  },
  {
    quote:
      "Blues guitar techniques are something I always wanted to master, and this course has helped me immensely in understanding and applying them.",
    name: "Nathan Adams",
    title: "Blues Guitar Techniques Student",
  },
  {
    quote:
      "The folk songwriting masterclass has been inspiring. Sarah Thompsons guidance has helped me find my voice as a folk songwriter.",
    name: "Emma Johnson",
    title: "Folk Songwriting Student",
  },
  {
    quote:
      "The lessons on music composition have expanded my creative horizons. I feel more confident in my ability to compose music that resonates with others.",
    name: "Daniel Rodriguez",
    title: "Composition Student",
  },
];

function MusicSchoolTestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonialCard;
