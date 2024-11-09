import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Nabvar from "./components/Navbar";
import RoomAbailability from "./components/RoomAbailability";
import TeamMemberSection from "./components/TeamMemberSection";

function App() {
  return (
    <>
      {/* Navbar Section Start  */}
      <Nabvar />
      {/* Hero Section End */}
      <HeroSection />
      {/* About Section Start */}
      <FeatureSection />
      {/* Available */}
      <RoomAbailability />
      {/* About Section */}
      <AboutSection />
      {/*CTA Section*/}
      <CTASection />
      {/* FAQ Section */}
      <FAQSection />
      {/* Team Member Section */}
      <TeamMemberSection />

      {/* Contact section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

export default App;
