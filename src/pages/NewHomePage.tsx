import NewHero from "@/components/NewHero";
import NewFeatures from "@/components/NewFeatures";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NewHomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <NewHero />
        <NewFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default NewHomePage;
