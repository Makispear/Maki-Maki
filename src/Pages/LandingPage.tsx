import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Technologies from "../Components/Technologies/Technolgies";

const LandingPage: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Technologies />
    </div>
  );
};

export default LandingPage;