import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

interface buttons {
  title: string;
  href: string;
}

const buttonDetails: buttons[] = [
  { title: 'Skills', href: '/' },
  { title: 'Journey', href: '/Journey' },
  { title: 'Information', href: '/Information' },
];

const About = () => {
  return (
    <div className='px-5 flex flex-col w-fit m-auto my-15 max-w-xl' id='About'>
      <motion.h1 initial={{ opacity: 0, y: 50 }} viewport={{once:true}} transition={{ duration: 0.4 }} whileInView={{ opacity: 1, y: 0 }} className='font-semibold text-primaryTextColor text-xl my-5'>
        About Me
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 50 }} viewport={{once:true}} transition={{ duration: 0.4 }} whileInView={{ opacity: 1, y: 0 }} className=' text-xs md:text-sm px-2 self-center max-w-xl'>
        I'm knowledgeable in using MERN stack technology for web development. I use MERN stack to create full stack application. I'm also knowledgeable in troubleshooting laptops, desktop and printers. I am also eager to learn more and develop or improve my skills.
      </motion.p>
      <main className='text-black font-semibold flex flex-col gap-3 my-5 relative'>
        <motion.section initial={{ opacity: 0, y: 50 }} viewport={{once:true}} transition={{ duration: 0.4 }} whileInView={{ opacity: 1, y: 0 }} className='flex gap-3 justify-center'>
          {buttonDetails.map((element, index) => {
            return (
              <NavLink
                to={element.href}
                key={index}
                className={({ isActive }: { isActive: boolean; isPending: boolean }) => {
                  return `p-3 rounded-lg text-sm md:text-base hover:bg-primaryTextColorHover  hover:text-secondaryTextColor transition-colors duration-200 ${isActive ? 'bg-primaryTextColor shadow-sm shadow-white' : 'bg-secondaryTextColor'}`;
                }}
              >
                {element.title}
              </NavLink>
            );
          })}
        </motion.section>
        <Outlet />
      </main>
    </div>
  );
};

export default About;
