export const Containers = () => {
  return (
    <>
      <h1> Main container</h1>
      <div className='container bg-info'>Contenido</div>
      <h2> Responsive Containers</h2>
      <div>
        <div className='container-sm bg-primary'>
          100% wide until small breakpoint
        </div>
        <div className='container-md bg-primary-subtle'>
          100% wide until medium breakpoint
        </div>
        <div className='container-lg bg-success'>
          100% wide until large breakpoint
        </div>
        <div className='container-xl bg-success-subtle'>
          100% wide until extra large breakpoint
        </div>
        <div className='container-xxl bg-danger'>
          100% wide until extra extra large breakpoint
        </div>
      </div>
      <h2>Fluid Containers</h2>
      <div>
        <div className='container-fluid bg-warning'>
          Fluid Container..........................
        </div>
      </div>
    </>
  );
};
