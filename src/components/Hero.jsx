import { DownloadIcon } from 'lucide-react';
import Container from './Container';
import Header from './Header';

const style = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url('/1.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  return (
    <section
      className='h-screen text-white grid grid-rows-[auto_1fr] lg:grid-rows-[auto_1fr_auto]'
      style={style}>
      <Header />
      <Container className='flex items-center justify-center'>
        <div className='w-full space-y-6 text-center'>
          <h3 className='permanent-marker text-[#FFA500] text-xl max-lg:text-lg'>
            IMOMOTIMI FOUNDATION PRESENTS
          </h3>
          <h2 className='text-5xl font-bold tracking-wide leading-snug max-lg:text-3xl'>
            Imomotimi Ijaw <br /> Dance Contest 2024
          </h2>
          <button className='flex mx-auto w-52 items-center justify-center gap-2 py-3 rounded bg-primary hover:bg-primary/70 text-sm font-medium'>
            {' '}
            Download Entry Form <DownloadIcon className='w-4 h-4' />{' '}
          </button>
          <p className='font-semibold text-lg max-lg:text-sm'>
            All duly filled out forms and the entry fees should be brought along
            to the audition
          </p>
        </div>
      </Container>
      <div className='hidden lg:block'>
        <img src='/shape-top-white-80.png' alt='image' className='w-full' />
      </div>
    </section>
  );
};
export default Hero;
