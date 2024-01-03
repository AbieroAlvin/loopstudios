import Creations from "./components/Creations";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import VRSection from "./components/VRSection";

function App() {
  return (
    <>
      <div className="w-full h-screen mx-auto">
        <div className="intro-bg w-full mx-auto md:py-8 py-5 px-4 md:px-6">
          <Navbar />
          <IntroSection />
        </div>
        <VRSection />
        <Creations />
        <Footer />
      </div>
    </>
  );
}

export default App;
