import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0.2]">
      <HeroSection />
      <FeaturedCourses />
      <MusicSchoolTestimonialCard />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
