import Container from './Container';

const Contact = () => {
  return (
    <section className='py-12 space-y-8'>
      <Container className=' gap-8 flex items-start max-lg:block max-lg:space-y-8'>
        <div className='flex-1 space-y-6'>
          <h5 className='text-xl lg:text-3xl font-semibold'>
            For More Information:
          </h5>
          <div className='space-y-2'>
            <p className='text-gray-500 text-sm'>
              <span className='font-semibold'>Hotlines:</span> 08123456789 &
              08198765432
            </p>
            <p className='text-gray-500 text-sm'>
              <span className='font-semibold'>Email:</span>{' '}
              info@ijawdancecontent.ng
            </p>
            <p className='text-gray-500 text-sm'>
              <span className='font-semibold'>Audition Location:</span> Nitro
              road, Lagos
            </p>
          </div>
        </div>
        <div className='flex-[2]'>
          <form>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full focus:outline-none bg-transparent border-b-2 border-b-[##797979]'
                />
              </div>
              <div className='px-4'> {/* Padding on the x-axis */}
                  <input
                    type='text'
                    placeholder='Phone'
                    className='w-full focus:outline-none bg-transparent border-b-2 border-b-[##797979]'
                  />
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'> {/* Grid for Subject and Email */}
              <div>
                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full focus:outline-none bg-transparent border-b-2 border-b-[##797979]'
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full focus:outline-none bg-transparent border-b-2 border-b-[##797979]'
                />
              </div>
            </div>
          </form>
          <div className="mt-8"> {/* Spacing above the button */}
            <button 
              type="button"  /*  type="button" since it's outside the form */
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-40" 
            >
              Get in Touch
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
