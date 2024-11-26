function Timer() {
  return (
    <div className='flex justify-center space-x-4 md:space-x-6'>
      {/* Days */}
      <div className='flex flex-col items-center'>
        <div className='text-4xl max-lg:text-2xl font-extrabold'>29</div>
        <div className='h-[1px] w-6 bg-[#F5F5F5] mx-auto'></div>
        <span className='text-sm font-medium '>Days</span>
      </div>

      {/* Semicolon */}
      <div className='flex items-center'>
        <span className='text-4xl max-lg:text-2xl font-bold'>:</span>
      </div>

      {/* Hours */}
      <div className='flex flex-col items-center'>
        <div className='text-4xl max-lg:text-2xl font-extrabold'>02</div>
        <span className='text-sm font-medium '>Hours</span>
      </div>

      {/* Semicolon */}
      <div className='flex items-center'>
        <span className='text-4xl max-lg:text-2xl font-bold'>:</span>
      </div>

      {/* Minutes */}
      <div className='flex flex-col items-center'>
        <div className='text-4xl max-lg:text-2xl font-extrabold'>08</div>
        <span className='text-sm font-medium '>Minutes</span>
      </div>

      {/* Semicolon */}
      <div className='flex items-center'>
        <span className='text-4xl max-lg:text-2xl font-bold'>:</span>
      </div>

      {/* Seconds */}
      <div className='flex flex-col items-center'>
        <div className='text-4xl max-lg:text-2xl font-extrabold'>06</div>
        <span className='text-sm font-medium '>Seconds</span>
      </div>
    </div>
  );
}

export default Timer;
