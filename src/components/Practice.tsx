export const Practice = () => {
  return (
    <>
      <div className='container-md border bg-info-subtle w-100'>
        <div className='row'>
          <div className='col bg-success'>Col 1</div>
          <div className='col bg-danger'>Col 2</div>
          <div className='col bg-warning'>Col 3</div>
          <div className='col bg-info'>Col 4</div>
        </div>
        <div className='row'>
          <div className='col bg-success'>Col 1</div>
          <div className='col bg-danger'>Col 2</div>
          <div className='col bg-warning'>Col 3</div>
          <div className='col bg-info'>Col 4</div>
        </div>
        <div className='row w-100'>
          <div className='col-4 bg-warning'>Col 1</div>
          <div className='col-8 bg-success'>Col 2</div>
          <div className='col-auto bg-warning-subtle w-100'>Col 2</div>
        </div>
        <div className='row'>
          <div className='col-md-8 bg-success'>Col 1</div>
          <div className='col-sm-4 bg-danger'>Col 2</div>
        </div>
        <div className='row w-100'>
          <div className='col-4 col-sm-8 col-md-3 col-lg-6 bg-info'>Col 1</div>
          <div className='col-8 col-sm-4 col-md-3 col-lg-6 bg-ligth'>Col 2</div>
        </div>
      </div>
    </>
  );
};
