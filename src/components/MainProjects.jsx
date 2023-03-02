import React, { useContext } from 'react';
import ProjectsInfo from './ProjectsInfo';
import { heading, secondaryTextColor, primaryTextColor, primaryTextColorDark, secondaryTextColorDark } from './ThemeRWD';
import movienotepad0 from '../assets/movienotepad/movienotepad0.png';
import movienotepad1 from '../assets/movienotepad/movienotepad1.png';
import movienotepad2 from '../assets/movienotepad/movienotepad2.png';
import mazegame0 from '../assets/mazegame/mazegame0.png';
import mazegame1 from '../assets/mazegame/mazegame1.png';
import mazegame2 from '../assets/mazegame/mazegame2.png';
import portfolio0 from '../assets/portfolio/portfolio0.png';
import portfolio1 from '../assets/portfolio/portfolio1.png';
import portfolio2 from '../assets/portfolio/portfolio2.png';
import pokedex0 from '../assets/pokedex/pokedex-0.png';
import pokedex1 from '../assets/pokedex/pokedex-1.png';
import pokedex2 from '../assets/pokedex/pokedex-2.png';
import eatstagram0 from '../assets/eatstagram/eatstagram0.png';
import eatstagram1 from '../assets/eatstagram/eatstagram1.png';
import eatstagram2 from '../assets/eatstagram/eatstagram2.png';
import weatherapp0 from '../assets/weatherapp/weatherApp0.png';
import weatherapp1 from '../assets/weatherapp/weatherApp1.png';
import weatherapp2 from '../assets/weatherapp/weatherApp2.png';
import { ThemeContext } from '../layout/Intro';

const Information = [
  {
    title: 'MovieNotepad',
    tech: 'MongoDb ExpressJS NodeJS ReactJS',
    description: `A fullstack application developed by using MERN stack. 
    It is an application where user can add movie or series by providing details/information about a specific movie. 
    It is also an application where user can user can add movies to their watchlist and add notes to a specific movie in the watchlist.`,
    image: [movienotepad0, movienotepad1, movienotepad2],
    demo: 'https://movienotepadclient.onrender.com/',
    source: 'https://github.com/Phol16/MovieNotepadV2',
  },
  {
    title: 'Eatstagram',
    tech: 'MongoDB ExpressJS ReactJS NodeJS',
    description: `A fullstack application developed by using MERN stack.
    It is an application developed by UpliftCodeCamp Batch12.
    It is an application where you can upload photos of your favorite foods, you can interact to other photos that was uploaded by other users as well.`,
    image: [eatstagram0, eatstagram1, eatstagram2],
    demo: 'https://proj6-fe.onrender.com/',
    source: 'https://github.com/Phol16',
  },
  {
    title: 'Portfolio',
    tech: 'ReactJS HTML CSS JS',
    description: `A Web-Based application developed by using ReactJS.
    The current website is this application.
    It is an application that shows the details and the projects`,
    image: [portfolio0, portfolio1, portfolio2],
    demo: 'https://phol.vercel.app/',
    source: 'https://github.com/Phol16/PortfolioV2',
  },
  {
    title: 'The Maze Game',
    tech: 'HTML CSS JS',
    description: `A simple application developed by using HTML CSS and JS.
    It is an application where you can choose game difficulty.
    It is an application develop for pc because the user will use the keyboard to play`,
    image: [mazegame0, mazegame1, mazegame2],
    demo: 'https://phol16.github.io/TheMazeGame/startingPage.html',
    source: 'https://github.com/Phol16/TheMazeGame',
  },
  {
    title: 'Pokemon Pokedex',
    tech: 'ReactJS RestfulAPI MUI',
    description: `A Web-Based application developed by using ReactJS.
    It is an application the that display a list of pokemons.
    It has a feature where you can capture the pokemon.`,
    image: [pokedex0, pokedex1, pokedex2],
    demo: 'https://reactjs-pokedex.onrender.com/',
    source: 'https://github.com/Phol16/ReactJS-reducer-pokedex',
  },
  {
    title: 'Weather App',
    tech: 'ReactJS RestfulAPI MUI',
    description: `A Web-Based application developed by using ReactJS.
    It is an application where it shows information about the weather in zamboanga city.
    It is a simple application.`,
    image: [weatherapp0, weatherapp1, weatherapp2],
    demo: 'https://weather-app-7009.onrender.com/',
    source: 'https://github.com/Phol16/Weather-App',
  },
];

const MainProjects = () => {
  const { dark } = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark;
  const STextColor = dark ? secondaryTextColor : secondaryTextColorDark;
  return (
    <div className={`${PTextColor} my-5 p-5 flex flex-col gap-5`} id='Projects'>
      <h1 className={`${heading} ${STextColor}`}>Projects</h1>
      <main className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5 self-center p-2'>
        {Information.map((Details) => {
          return <ProjectsInfo key={Details.title} title={Details.title} tech={Details.tech} description={Details.description} image={Details.image} demo={Details.demo} source={Details.source} />;
        })}
      </main>
    </div>
  );
};

export default MainProjects;
