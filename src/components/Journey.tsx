import DotIcon from '../assets/svg/DotIcon';

interface details {
  year?: number;
  content: string;
}

const Details: details[] = [
  { content: '',year: 2021},
  { content: 'Graduated College' }, 
  { content: 'Learning C#' }, 
  { content: 'Learning Web Fundamentals' }, 
  { content: '',year: 2022},
  { content: 'Enrolled in a Bootcamp' }, 
  { content: 'Learning Git' }, 
  { content: 'Re-Learning Web Fundamentals' }, 
  { content: 'Javascript (Basic - Advance)' }, 
  { content: 'React JS' }, 
  { content: 'Node JS' }, 
  { content: 'Express JS' }, 
  { content: 'General Programming' }, 
  { content: 'MongoDB' }, 
  { content: 'Graduated from BootCamp' }, 
  { content: '',year: 2023},
  { content: 'Re-Learning C#' }, 
  { content: 'Learning TypeScript' },
  { content: 'Currently Learn NextJS' },
  { content: 'Will learn Relational Database Management System(RDBMS)' }
];

const Journey = () => {
  return (
    <div className=' text-secondaryTextColor flex flex-col '>
      <div className='text-primaryTextColor'>Journey</div>
      <section className='relative md:-left-28 my-10 w-fit text-xs md:text-base flex flex-col px-10 gap-8'>
        {Details.map((element, index) => {
          return (
            <main key={index} className={`relative flex items-center px-5 ${index % 2 === 0 ? 'md:justify-end' : 'md:left-[100%]'}`}>
              <p className='w-fit'>{element.content}</p>
              {element.year ? <span className='text-primaryTextColor'>{element.year}</span> : null}
              <span className={`${index !== Details.length - 1 ? 'line' : null} absolute left-0 ${index % 2 === 0 ? 'md:left-[100%]' : ''}`}>
                <DotIcon />
              </span>
            </main>
          );
        })}
      </section>
    </div>
  );
};

export default Journey;
