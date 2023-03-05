import React, { useContext } from 'react'
import ProjectDetails from './ProjectDetails'
import { ThemeFormat } from './ThemeFormat'
import movienotepad0 from '../assets/movienotepad/movienotepad0.png';
import mazegame0 from '../assets/mazegame/mazegame0.png';
import portfolio0 from '../assets/portfolio/portfolio0.png';
import pokedex0 from '../assets/pokedex/pokedex-0.png';
import eatstagram0 from '../assets/eatstagram/eatstagram0.png';
import weatherapp0 from '../assets/weatherapp/weatherApp0.png';
import { ThemeContext } from '../layout/Intro';

const Information = [
  {
    title: 'MovieNotepad',
    tech: 'MongoDb ExpressJS NodeJS ReactJS',
    description: `A fullstack application developed by using MERN stack. 
    It is an application where user can add movie or series by providing details/information about a specific movie. 
    It is also an application where user can user can add movies to their watchlist and add notes to a specific movie in the watchlist.`,
    image: movienotepad0,
    demo: 'https://movienotepadclient.onrender.com/',
    source: 'https://github.com/Phol16/MovieNotepadV2',
  },
  {
    title: 'Eatstagram',
    tech: 'MongoDB ExpressJS ReactJS NodeJS',
    description: `A fullstack application developed by using MERN stack.
    It is an application developed by UpliftCodeCamp Batch12.
    It is an application where you can upload photos of your favorite foods, you can interact to other photos that was uploaded by other users as well.`,
    image: eatstagram0,
    demo: 'https://proj6-fe.onrender.com/',
    source: 'https://github.com/Phol16',
  },
  {
    title: 'Personal Portfolio',
    tech: 'ReactJS HTML CSS JS',
    description: `A Web-Based application developed by using ReactJS.
    The current website is this application.
    It is an application that shows the details and the projects`,
    image: portfolio0,
    demo: 'https://phol.vercel.app/',
    source: 'https://github.com/Phol16/PortfolioV2',
  },
  {
    title: 'The Maze Game',
    tech: 'HTML CSS JS',
    description: `A simple application developed by using HTML CSS and JS.
    It is an application where you can choose game difficulty.
    It is an application develop for pc because the user will use the keyboard to play`,
    image: mazegame0,
    demo: 'https://phol16.github.io/TheMazeGame/startingPage.html',
    source: 'https://github.com/Phol16/TheMazeGame',
  },
  {
    title: 'Pokemon Pokedex',
    tech: 'ReactJS RestfulAPI MUI',
    description: `A Web-Based application developed by using ReactJS.
    It is an application the that display a list of pokemons.
    It has a feature where you can capture the pokemon.`,
    image: pokedex0,
    demo: 'https://reactjs-pokedex.onrender.com/',
    source: 'https://github.com/Phol16/ReactJS-reducer-pokedex',
  },
  {
    title: 'Weather App',
    tech: 'ReactJS RestfulAPI MUI',
    description: `A Web-Based application developed by using ReactJS.
    It is an application where it shows information about the weather in zamboanga city.
    It is a simple application.`,
    image: weatherapp0,
    demo: 'https://weather-app-7009.onrender.com/',
    source: 'https://github.com/Phol16/Weather-App',
  },
];

const Projects = () => {
  const { dark } = useContext(ThemeContext);
  const {Theading, primaryDColorText, primaryLColorText,secondaryDColorText, secondaryLColorText} = ThemeFormat
  return (
    <div className={`${dark ? primaryDColorText : primaryLColorText} flex flex-col py-5 max-w-fit m-auto gap-10`} id='Projects'>
      <h1 className={`${Theading} ${dark ? secondaryDColorText: secondaryLColorText}`}>Projects</h1>
      <main className='grid gap-5 justify-center items-center lg:grid-cols-2 gap-5 w-fit self-center'>
      {Information.map((Details) => {
          return <ProjectDetails key={Details.title} title={Details.title} tech={Details.tech} description={Details.description} image={Details.image} demo={Details.demo} source={Details.source} />;
        })}
        </main>
    </div>
  )
}

export default Projects