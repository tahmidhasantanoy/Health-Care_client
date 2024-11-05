/* What is the speciality of this page
So that it  takes a common layout, But when i create 
another page.tsx, it will not take common layout */
import HeroSection from "@/components/UI/HomePage/heroSection/heroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors/>
    </div>
  );
};

export default HomePage;
