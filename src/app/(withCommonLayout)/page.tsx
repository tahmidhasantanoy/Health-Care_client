/* What is the speciality of this page
So that it  takes a common layout, But when i create 
another page.tsx, it will not take common layout */
import HeroSection from "@/components/UI/HomePage/heroSection/heroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
    </div>
  );
};

export default HomePage;
