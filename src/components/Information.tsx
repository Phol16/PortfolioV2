import { motion } from 'framer-motion';

type education = {
  education: string;
  date: string;
  course?: string;
};

interface inform {
  title: string;
  content?: string;
  education?: education[];
}

const Inform: inform[] = [
  {
    title: 'Name',
    content: 'Pholibert U. Lim Jr.',
  },
  {
    title: 'Location',
    content: 'Zamboanga City, Philippines',
  },
  {
    title: 'Hobbies',
    content: 'Coding, Movies, Exercies',
  },
  {
    title: 'Education',
    education: [
      { education: 'Uplift Code Camp', date: '/July 2022 - Dec 2022' },
      {
        education: 'Ateneo de Zamboanga University',
        date: '/June 2015 - March 2021',
        course: 'Bachelor of Science in Computer Engineering',
      },
    ],
  },
];

const Information = () => {
  return (
    <div className=' max-w-lg '>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=' text-primaryTextColor'
      >
        Information
      </motion.h1>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=' text-secondaryTextColor font-light p-3 my-5'
      >
        {Inform.map((element, index) => {
          return (
            <main className='my-5' key={index}>
              <h2 className='font-normal md:text-base'>{element.title}</h2>
              {element.content ? (
                <p className='my-2 indent-5 text-xs md:text-sm text-primaryTextColor'>
                  {element.content}
                </p>
              ) : element.education ? (
                element.education.map((e, i) => {
                  return (
                    <main
                      className=' pl-5 my-4 space-y-1 text-xs md:text-sm'
                      key={i}
                    >
                      <h3 className='text-primaryTextColor'>{e.education}</h3>
                      {e.course ? <p>{e.course}</p> : null}
                      <p>{e.date}</p>
                    </main>
                  );
                })
              ) : null}
            </main>
          );
        })}
      </motion.section>
    </div>
  );
};

export default Information;
