import Hero from "../Components/Hero/Hero";
import Technologies from "../Components/Technologies/Technolgies";
import FeaturedProjects from "../Components/FeaturedProjects/FeaturedProjects.tsx";
import TrustStrip from "../Components/TrustStrip/TrustStrip.tsx";

const LandingPage: React.FC = () => {
  return <div>
      <Hero />
      <Technologies />
      <FeaturedProjects />
      <TrustStrip />
    </div>
};

export default LandingPage;
