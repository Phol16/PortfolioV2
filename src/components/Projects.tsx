import ProjectsDetails from './ProjectsDetails';
import donut from '../assets/svg/DonutIcon.svg';
import sphere from '../assets/svg/Sphere.svg';

interface ProjectsInfo {
  title: string;
  description: string;
  image: string;
  tech: string;
  live: string;
  source: string;
}

interface ProjectsInfos extends Array<ProjectsInfo> {}

const projectsInfo: ProjectsInfos = [
  {
    title: 'Movie Notepad',
    description: 'A fullstack application developed using MERN stack. It is an application where user can add movie or series by providing details/information about a specific movie. It is also an application where user can add movies to their watchlist and add notes to a specific movie in the watchlist.',
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680421092/Portfolio/movienotepad_qgp9fr.png',
    tech: 'MongoDb ExpressJS NodeJS ReactJS',
    live: 'https://movienotepadclient.onrender.com/',
    source: 'https://github.com/Phol16/MovieNotepadV2',
  },
  {
    title: 'Mini Messenger',
    tech: 'MongoDb ExpressJS SocketIO ReactJs',
    description: `A fullstack application developed using MERN stack with socketIO. It is a simple application that almost look like messenger where user can communicate with one another, it is a very simple application that uses socket io for realtime communication`,
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1679321037/Portfolio/Untitled_b3kuhi.png',
    live: 'https://minimessenger.onrender.com/',
    source: 'https://github.com/Phol16/ChatApp',
  },
  {
    title: 'Personal Portfolio',
    tech: 'ReactJS HTML CSS JS TailwindCSS',
    description: `A Web-Based application developed using ReactJS.
    The current website is this application.
    It is an application that shows the details and the projects`,
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680420731/Portfolio/portfolio_qqsld3.png',
    live: 'https://phol.vercel.app/',
    source: 'https://github.com/Phol16/PortfolioV2',
  },
  {
    title: 'Eatstagram',
    tech: 'MongoDB ExpressJS ReactJS NodeJS Auth0',
    description: `A fullstack application developed using MERN stack.
    It is an application developed by UpliftCodeCamp Batch12.
    It is an application where you can upload photos of your favorite foods, you can interact to other photos that was uploaded by other users as well.`,
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680420740/Portfolio/eatstagram_o3q32x.png',
    live: 'https://proj6-fe.onrender.com/',
    source: 'https://github.com/Phol16',
  },
  {
    title: 'Pokemon Pokedex',
    tech: 'ReactJS RestfulAPI MUI',
    description: `A Web-Based application developed using ReactJS.
    It is an application the that display a list of pokemons.
    It has a feature where you can capture the pokemon.`,
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680420735/Portfolio/pokedex_nbegkb.png',
    live: 'https://reactjs-pokedex.onrender.com/',
    source: 'https://github.com/Phol16/ReactJS-reducer-pokedex',
  },
  {
    title: 'Weather App',
    tech: 'ReactJS RestfulAPI ',
    description: `A Web-Based application developed using ReactJS.
    It is an application where it shows information about the weather in zamboanga city.
    It is a simple application.`,
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680420728/Portfolio/wheaterApp_lehxrc.png',
    live: 'https://weather-app-7009.onrender.com/',
    source: 'https://github.com/Phol16/Weather-App',
  },
];

const Projects = () => {
  return (
    <main className='relative'>
    <div className='my-20 flex flex-col' id='Project'>
      <section className='w-fit self-center px-5'>
        <h1 className='font-semibold text-primaryTextColor text-xl my-5'>Projects</h1>
        <main className='grid md:grid-cols-2 w-fit h-fit gap-2 md:gap-x-16 xl:gap-x-28'>
          {projectsInfo.map((element, index) => {
            return <ProjectsDetails number={index + 1} title={element.title} description={element.description} image={element.image} tech={element.tech} live={element.live} source={element.source} key={index} />;
          })}
        </main>
      </section>
    </div>
    <section className='absolute top-0 -z-40 w-full h-full'>
          <img loading='lazy' decoding='async' src={donut} alt="cube" className='w-20 h-20 opacity-30 absolute left-[220px] top-[25%]'/>
          <img loading='lazy' decoding='async' src={sphere} alt="cube" className='w-20 h-20 opacity-30 absolute right-[220px] top-[75%]'/>
    </section>
    </main>
  );
};

export default Projects;
