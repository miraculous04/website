import { MenuIcon, PhoneCallIcon } from 'lucide-react';
import Container from './Container';

const Header = () => {
  return (
    <header>
      <Container className='flex items-center justify-between py-4'>
        <a href='#' className='flex items-center justify-center w-16'>
          <img src='/logo.png' alt='logo' className='w-full object-contain' />
        </a>
        <nav className='max-lg:hidden'>
          <ul className='flex items-center justify-center gap-8'>
            {['Intro', 'Countdown', 'Notes', 'Location', 'Contact'].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href='#'
                    className='hover:text-gray-400 text-white transition-colors duration-150'>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <button className='flex max-lg:hidden items-center justify-center gap-1 py-3 w-36 rounded bg-primary hover:bg-primary/70 text-sm'>
          <PhoneCallIcon className='w-3 h-3' />
          Call Us
        </button>
        <button className='lg:hidden'>
          <MenuIcon className='w-8 h-8' />
        </button>
      </Container>
    </header>
  );
};
export default Header;
