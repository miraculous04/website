import { CircleDollarSignIcon, TrophyIcon } from 'lucide-react';
import Container from './Container';
import Timer from './Timer';

const Countdown = () => {
  return (
    <section className='min-h-[500px] grid grid-rows-[1fr_1fr]'>
      <div className='relative bg-white grid place-items-center'>
        <Container className='space-y-6 py-12'>
          <h5 className='text-center text-3xl max-lg:text-xl font-semibold'>
            Countdown to Audition
          </h5>
          <div>
            <Timer />
          </div>
        </Container>
        <div className='absolute w-full top-full left-0'>
          <img src='/shape-bottom-white-80.png' alt='' className='w-full' />
        </div>
      </div>
      <Container className='flex items-center max-lg:block h-full py-12 justify-center gap-8 max-lg:space-y-8'>
        <div className='flex-1 font-bold text-2xl lg:text-5xl'>
          Important things to note...
        </div>
        <div className='flex-1 flex items-start gap-8 max-lg:block max-lg:space-y-8'>
          <div className='space-y-4 flex-1'>
            <CircleDollarSignIcon className='h-10 w-10 text-primary' />
            <h5 className='text-lg lg:text-xl font-semibold'>Pricing</h5>
            <p className='text-gray-500 text-sm'>
              Audition forms are avaialable for N1,000 for single contestants
              and N1,500 for a group of five
            </p>
          </div>
          <div className='space-y-4 flex-1'>
            <TrophyIcon className='h-10 w-10 text-primary' />
            <h5 className='text-lg lg:text-xl font-semibold'>Prizes</h5>
            <div className='text-gray-500 text-sm space-y-1'>
              <p>
                {' '}
                <span className='font-semibold'>1st Prize</span>: N2,000,000
              </p>
              <p>
                {' '}
                <span className='font-semibold'>2nd Prize</span>: N1,000,000
              </p>
              <p>
                {' '}
                <span className='font-semibold'>3rd Prize</span>: N500,000
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Countdown;
