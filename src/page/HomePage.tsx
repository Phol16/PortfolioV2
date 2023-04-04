import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"

const HomePage = () => {
  return (
    <div className="text-secondaryTextColor font-poppins font-normal">
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
    </div>
  )
}

export default HomePage