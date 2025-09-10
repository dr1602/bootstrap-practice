import type React from 'react';

export const Columns: React.FC = () => {
  return (
    <>
      <div className='bg-dark min-vh-100'>
        <div className='container bg-info-subtle vh-75'>
          <div className='row align-items-start min-vh-25 vh-100'>
            <div className='col bg-principal'>One of three columns</div>
            <div className='col bg-secondary'>One of three columns</div>
            <div className='col bg-success'>One of three columns</div>
          </div>
          <div className='row align-items-center min-vh-25 vh-100'>
            <div className='col bg-warning vh-25'>One of three columns</div>
            <div className='col bg-danger vh-25'>One of three columns</div>
            <div className='col bg-light vh-25'>One of three columns</div>
          </div>
          <div className='row align-items-end min-vh-25 vh-25'>
            <div className='col bg-principal'>One of three columns</div>
            <div className='col bg-warning'>One of three columns</div>
            <div className='col bg-warning-subtle'>One of three columns</div>
          </div>
        </div>
        <div className='container bg-info'>
          <div className='row min-vh-25'>
            <div className='col align-self-start bg-danger-subtle'>
              One of three columns
            </div>
            <div className='col align-self-center bg-warning-subtle'>
              One of three columns
            </div>
            <div className='col align-self-end bg-success-subtle'>
              One of three columns
            </div>
          </div>
        </div>
        <div className='container bg-info-subtle'>
          <div className='container'>
            <div className='row justify-content-start'>
              <div className='col-4 bg-success'>One of two columns</div>
              <div className='col-4 bg-warning'>One of two columns</div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 bg-danger'>One of two columns</div>
              <div className='col-4 bg-primary'>One of two columns</div>
            </div>
            <div className='row justify-content-end'>
              <div className='col-4 bg-light'>One of two columns</div>
              <div className='col-4 bg-info'>One of two columns</div>
            </div>
            <div className='row justify-content-around'>
              <div className='col-4 bg-dark text-white'>One of two columns</div>
              <div className='col-4 bg-secondary'>One of two columns</div>
            </div>
            <div className='row justify-content-between'>
              <div className='col-4 bg-secondary'>One of two columns</div>
              <div className='col-4 bg-warning-subtle'>One of two columns</div>
            </div>
            <div className='row justify-content-evenly'>
              <div className='col-4 bg-danger'>One of two columns</div>
              <div className='col-4 bg-success'>One of two columns</div>
            </div>
          </div>
        </div>
        <h2> By order </h2>
        <div className='container'>
          <div className='row'>
            <div className='col bg-success'>First in DOM, no order applied</div>
            <div className='col order-2 bg-warning'>
              Third in DOM, with a larger order
            </div>
            <div className='col order-1 bg-info'>
              Second in DOM, with an order of 1
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
