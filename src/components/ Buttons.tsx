export const Buttons = () => {
  return (
    <>
      <button type='button' className='btn-close' aria-label='Close'></button>
      <button
        type='button'
        className='btn-close'
        disabled
        aria-label='Close'
      ></button>
      <div className='bg-info'>
        <button
          type='button'
          className='btn-close btn-close-white'
          aria-label='Close'
        ></button>
        <button
          type='button'
          className='btn-close btn-close-white'
          disabled
          aria-label='Close'
        ></button>
      </div>
    </>
  );
};
