const currDate: number = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='relative justify-between items-center px-5 py-2 text-xs hidden md:flex'>
      <h1 className='absolute left-[48%] '>© Phol {currDate}</h1>
      <section className=' flex flex-col'>
        <p>Contact: 09060447603</p>
        <p>Email: pholibertlim@gmail.com</p>
        <p>Location: Zamboanga City</p>
      </section>
      <h1>Aspiring Software Developer</h1>
    </div>
  );
};

export default Footer;
