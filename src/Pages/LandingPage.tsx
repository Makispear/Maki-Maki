import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Technologies from "../Components/Technologies/Technolgies";
import FeaturedProjects from "../Components/FeaturedProjects/FeaturedProjects.tsx";

const LandingPage: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Technologies />
        <FeaturedProjects />
    </div>
  );
};

export default LandingPage;