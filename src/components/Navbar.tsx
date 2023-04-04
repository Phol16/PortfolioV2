import Logo from '../assets/svg/Logo';
import FixedNav from './FixedNav';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <div className='text-secondaryTextColor bg-primaryTextColor p-4 flex items-center justify-between'>
      <Logo />
      <NavMenu />
      <FixedNav />
    </div>
  );
};

export default Navbar;
