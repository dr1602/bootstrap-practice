export const Grid = () => {
  return (
    <>
      <div className='container'>
        <h1> Grid</h1>
      </div>
      <div>
        <div className='container bg-info'>
          <div className='row bg-success'>
            <div className='col bg-danger'>Column</div>
            <div className='col bg-warning'>Column</div>
            <div className='col bg-primary'>Column</div>
          </div>
        </div>
      </div>
    </>
  );
};
