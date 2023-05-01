import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div className='text-secondaryTextColor font-poppins font-normal'>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
