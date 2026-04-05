import Services from "../components/Services";
import ChatHighlight from "../components/ChatHighlight";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ChatHighlight />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </>
  );
};
export default Home;
