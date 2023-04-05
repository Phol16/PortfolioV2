import { NavLink, Outlet } from 'react-router-dom';

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
      <h1 className='font-semibold text-primaryTextColor text-xl my-5'>About Me</h1>
      <p className=' text-xs md:text-sm px-2 self-center max-w-xl'>I'm knowledgeable in using MERN stack technology for web development. I use MERN stack to create full stack application. I'm also knowledgeable in troubleshooting laptops, desktop and printers. I am also eager to learn more or develop or improve my skills. currently I am learning typescript and nextJS</p>
      <main className='text-black font-semibold flex flex-col gap-3 my-5'>
        <section className='flex gap-3 justify-center'>
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
        </section>
        <Outlet />
      </main>
    </div>
  );
};

export default About;
