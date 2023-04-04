import tsIcon from '../assets/svg/TypescriptIcon';
import jsIcon from '../assets/svg/JavascriptIcon';
import cIcon from '../assets/svg/CsharpIcon';
import mongodbIcon from '../assets/svg/MongodbIcon';
import expressJsIcon from '../assets/svg/ExpressIcon';
import nodeJsIcon from '../assets/svg/NodejsIcon';
import reactJsIcon from '../assets/svg/ReactjsIcon';
import LaptopIcon from '../assets/svg/LaptopIcon';
import DesktopIcon from '../assets/svg/DesktopIcon';
import PrinterIcon from '../assets/svg/PrinterIcon';

type fill = {
  fill: string;
};

type componentIcon = {
  name: string;
  Comp: ({ fill }: fill) => JSX.Element;
};

interface skill {
  title: string;
  icons?: Array<componentIcon>;
}
interface cert {
  title: string;
  image: string;
}

const Skill: skill[] = [
  {
    title: 'Troubleshooting',
    icons: [
      { name: 'Laptop', Comp: LaptopIcon },
      { name: 'Desktop', Comp: DesktopIcon },
      { name: 'Printer', Comp: PrinterIcon },
    ],
  },
  {
    title: 'Programming Language',
    icons: [
      { name: 'Typescript', Comp: tsIcon },
      { name: 'Javascript', Comp: jsIcon },
      { name: 'C Sharp', Comp: cIcon },
    ],
  },
  {
    title: 'Full Stack Development',
    icons: [
      { name: 'MongoDB', Comp: mongodbIcon },
      { name: 'Express JS', Comp: expressJsIcon },
      { name: ' React JS', Comp: reactJsIcon },
      { name: 'Node JS', Comp: nodeJsIcon },
    ],
  },
];

const Cert: cert[] = [
  {
    title: 'Full Stack Development',
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680583345/Portfolio/uplift_ymob3e.png',
  },
  {
    title: 'Maintain and Repair Computer System',
    image: 'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680583169/Portfolio/Image_11_geuqux.jpg',
  },
];

const Skills = () => {
  return (
    <div>
      <h1 className=' text-primaryTextColor'>Skills</h1>
      <section className='grid md:grid-cols-2 items-center gap-10 text-secondaryTextColor my-10'>
        {Skill.map((skillElement, index) => {
          return (
            <div key={index} className='flex flex-col gap-3 items-center'>
              <h1>{skillElement.title}</h1>
              <main className='flex gap-5 justify-center items-center'>
                {skillElement.icons?.map(({ Comp, name }, index) => {
                  return (
                    <p title={name} key={index}>
                      <Comp fill={'#05B2DC'} />
                    </p>
                  );
                })}
              </main>
            </div>
          );
        })}
      </section>
      <h1 className=' text-primaryTextColor my-10'>Certification</h1>
      <main className=' flex flex-col md:flex-row gap-5 justify-center'>
        {Cert.map((element, index) => {
          return <img loading='lazy' decoding='async' src={element.image} key={index} className=' w-[300px] self-center ' />;
        })}
      </main>
    </div>
  );
};

export default Skills;
