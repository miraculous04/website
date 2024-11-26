const GoogleMap = () => {
  return (
    <div className='relative'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3963.261787669093!2d3.3555577732137674!3d6.614361722104485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1732604214124!5m2!1sen!2sng'
        width='100%'
        height='500'
        frameBorder='0'
        style={{ border: 0 }}
        allowfullscreen=''
        aria-hidden='false'
        tabIndex='0'
      />
      <div className='absolute bottom-0 z-50 left-0 w-full'>
        <img src='/shape-top-grey-80.png' alt='' className='w-full' />
      </div>
    </div>
  );
};
export default GoogleMap;
