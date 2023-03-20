import React, { useContext } from 'react';
import ProjectDetails from './ProjectDetails';
import { ThemeFormat } from './ThemeFormat';
import { ThemeContext } from '../layout/Intro';

const Information = [
  {
    title: 'MovieNotepad',
    tech: 'MongoDb ExpressJS NodeJS ReactJS',
    description: `A fullstack application developed by using MERN stack. 
    It is an application where user can add movie or series by providing details/information about a specific movie. 
    It is also an application where user can user can add movies to their watchlist and add notes to a specific movie in the watchlist.`,
    image: 'https://res.cloudinary.com/df8nkgje6/image/upload/v1678977547/Portfolio/Untitled_nsv7an.png',
    demo: 'https://movienotepadclient.onrender.com/',
    source: 'https://github.com/Phol16/MovieNotepadV2',
  },
  {
    title: 'Mini Messenger',
    tech: 'MongoDb ExpressJS SocketIO ReactJs',
    description: `An simple application that is almost a like from messenger where user can communicate with one another, it is a very simple application that uses socket io for realtime communication`,
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1679321037/Portfolio/Untitled_b3kuhi.png',
    demo: 'https://minimessenger.onrender.com/',
    source: 'https://github.com/Phol16/ChatApp',
  },
  {
    title: 'Personal Portfolio',
    tech: 'ReactJS HTML CSS JS TailwindCSS',
    description: `A Web-Based application developed by using ReactJS.
    The current website is this application.
    It is an application that shows the details and the projects`,
    image: 'https://res.cloudinary.com/df8nkgje6/image/upload/v1678880213/Portfolio/portfolio_jmaefg.png',
    demo: 'https://phol.vercel.app/',
    source: 'https://github.com/Phol16/PortfolioV2',
  },
  {
    title: 'Eatstagram',
    tech: 'MongoDB ExpressJS ReactJS NodeJS Auth0',
    description: `A fullstack application developed by using MERN stack.
    It is an application developed by UpliftCodeCamp Batch12.
    It is an application where you can upload photos of your favorite foods, you can interact to other photos that was uploaded by other users as well.`,
    image: 'https://res.cloudinary.com/df8nkgje6/image/upload/v1678191964/Portfolio/eatstagram0_ryyp3i.png',
    demo: 'https://proj6-fe.onrender.com/',
    source: 'https://github.com/Phol16',
  },
  {
    title: 'Pokemon Pokedex',
    tech: 'ReactJS RestfulAPI MUI',
    description: `A Web-Based application developed by using ReactJS.
    It is an application the that display a list of pokemons.
    It has a feature where you can capture the pokemon.`,
    image: 'https://res.cloudinary.com/df8nkgje6/image/upload/v1678262045/Portfolio/Untitled_qxjfwr.png',
    demo: 'https://reactjs-pokedex.onrender.com/',
    source: 'https://github.com/Phol16/ReactJS-reducer-pokedex',
  },
  {
    title: 'Weather App',
    tech: 'ReactJS RestfulAPI ',
    description: `A Web-Based application developed by using ReactJS.
    It is an application where it shows information about the weather in zamboanga city.
    It is a simple application.`,
    image: 'https://res.cloudinary.com/df8nkgje6/image/upload/v1678193519/Portfolio/weatherApp0_drppyc.png',
    demo: 'https://weather-app-7009.onrender.com/',
    source: 'https://github.com/Phol16/Weather-App',
  },
];

const Projects = () => {
  const { dark } = useContext(ThemeContext);
  const { Theading, primaryDColorText, primaryLColorText, secondaryDColorText, secondaryLColorText } = ThemeFormat;

  const PTextColor = dark ? primaryDColorText : primaryLColorText;
  const STextColor = dark ? secondaryDColorText : secondaryLColorText;

  return (
    <div className={`${PTextColor} flex flex-col max-w-fit m-auto gap-10`} id='Projects'>
      <h1 className={`${Theading} ${STextColor} p-2`}>Projects</h1>
      <main className={`grid gap-5 justify-center items-center xl:grid-cols-2 gap-5 w-fit self-center overflow-hidden py-10`}>
        {Information.map((Details, index) => {
          return <ProjectDetails number={index + 1} key={Details.title} title={Details.title} tech={Details.tech} description={Details.description} image={Details.image} demo={Details.demo} source={Details.source} />;
        })}
      </main>
    </div>
  );
};

export default Projects;
