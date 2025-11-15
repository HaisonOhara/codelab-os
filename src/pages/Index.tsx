import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Hero />
      <Courses />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
