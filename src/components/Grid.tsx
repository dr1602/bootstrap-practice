export const Grid = () => {
  return (
    <>
      <div className='container bg-info-subtle'>
        <h1> Grid</h1>
      </div>
      <div>
        <div className='container bg-info'>
          <div className='row bg-success gx-2'>
            <div className='col bg-danger p-3 m-2'>Column</div>
            <div className='col bg-warning p-3 m-2'>Column</div>
            <div className='col bg-primary p-3 m-2'>Column</div>
          </div>
        </div>
      </div>
      <div className='container bg-info'>
        <h1> Auto-layout columns</h1>
        <h2> Equal-width</h2>
        <div className='container bg-info-subtle'>
          <div className='row bg-primary'>
            <div className='col bg-success'>1 of 2</div>
            <div className='col bg-danger'>2 of 2</div>
          </div>
          <div className='row bg-warning-subtle'>
            <div className='col bg-danger-subtle'>1 of 3</div>
            <div className='col bg-primary-subtle'>2 of 3</div>
            <div className='col bg-secondary-subtle'>3 of 3</div>
          </div>
        </div>
        <h2> Setting one column width </h2>
        <div className='container bg-info-subtle'>
          <div className='row bg-secondary-subtle'>
            <div className='col bg-primary'>1 of 3</div>
            <div className='col-6 bg-success'>2 of 3 (wider)</div>
            <div className='col bg-danger'>3 of 3</div>
          </div>
          <div className='row bg-warning-subtle'>
            <div className='col bg-danger-subtle'>1 of 3</div>
            <div className='col-5 bg-primary-subtle'>2 of 3 (wider)</div>
            <div className='col bg-secondary-subtle'>3 of 3</div>
          </div>
        </div>
        <h2> Variable width content </h2>
        <div className='container bg-warning-subtle'>
          <div className='container bg-info-subtle'>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-2 bg-primary'>1 of 3</div>
              <div className='col-md-auto bg-secondary'>
                Variable width content
              </div>
              <div className='col col-lg-2 bg-success'>3 of 3</div>
            </div>
            <div className='row'>
              <div className='col bg-warning'>1 of 3</div>
              <div className='col-md-auto bg-danger'>
                Variable width content
              </div>
              <div className='col col-lg-2 bg-info'>3 of 3</div>
            </div>
          </div>
        </div>
        <h2> All breakpoints </h2>
        <div className='container'>
          <div className='container'>
            <div className='row'>
              <div className='col bg-warning'>col</div>
              <div className='col bg-danger'>col</div>
              <div className='col bg-success'>col</div>
              <div className='col bg-secondary'>col</div>
            </div>
            <div className='row'>
              <div className='col-8 bg-primary'>col-8</div>
              <div className='col-4 bg-light'>col-4</div>
            </div>
          </div>
        </div>
        <h2>Stacked to horizontal</h2>
        <div className='container'>
          <div className='container bg-secondary'>
            <div className='row'>
              <div className='col-md-8 bg-warning'>col-sm-8</div>
              <div className='col-md-4 bg-success'>col-sm-4</div>
            </div>
            <div className='row'>
              <div className='col-lg bg-primary'>col-sm</div>
              <div className='col-lg bg-body'>col-sm</div>
              <div className='col-lg bg-ligth'>col-sm</div>
            </div>
          </div>
        </div>
        <h2> Mix and Match </h2>
        <div className='container'>
          <div className='container'>
            <p>
              Stack the columns on mobile by making one full-width and the other
              half-width
            </p>
            <div className='row'>
              <div className='col-md-8 bg-primary'>.col-md-8</div>
              <div className='col-6 col-md-4 bg-secondary'>
                .col-6 .col-md-4
              </div>
            </div>

            <p>
              Columns start at 50% wide on mobile and bump up to 33.3% wide on
              desktop
            </p>
            <div className='row'>
              <div className='col-6 col-md-4 bg-success'>.col-6 .col-md-4</div>
              <div className='col-6 col-md-4 bg-warning'>.col-6 .col-md-4</div>
              <div className='col-6 col-md-4 bg-danger'>.col-6 .col-md-4</div>
            </div>

            <p> Columns are always 50% wide, on mobile and desktop </p>
            <div className='row'>
              <div className='col-6 bg-black text-light'>.col-6</div>
              <div className='col-6 bg-dark text-white'>.col-6</div>
            </div>
          </div>
        </div>
        <h2> Row columns</h2>
        <div className='container'>
          <div className='container'>
            <div className='row row-cols-2 bg-primary'>
              <div className='col bg-secondary'>Column</div>
              <div className='col bg-success'>Column</div>
              <div className='col bg-warning'>Column</div>
              <div className='col bg-danger'>Column</div>
            </div>
            <div className='container mt-3'>
              <div className='row row-cols-3 bg-success'>
                <div className='col bg-body'>Column</div>
                <div className='col bg-white'>Column</div>
                <div className='col bg-dark text-light'>Column</div>
                <div className='col bg-black text-white'>Column</div>
              </div>
            </div>

            <div className='container mt-1'>
              <div className='row row-cols-auto bg-danger'>
                <div className='col bg-warning'>Column</div>
                <div className='col bg-primary'>Column</div>
                <div className='col bg-secondary'>Column</div>
                <div className='col bg-black text-white'>Column</div>
              </div>
            </div>

            <div className='container bg-primary mt-2'>
              <div className='row row-cols-4'>
                <div className='col bg-successs-subtle'>Column</div>
                <div className='col bg-warning-subtle'>Column</div>
                <div className='col bg-danger-subtle'>Column</div>
                <div className='col bg-info-subtle'>Column</div>
              </div>
            </div>

            <div className='container bg-warning mt-3'>
              <div className='row row-cols-4'>
                <div className='col bg-danger'>Column</div>
                <div className='col bg-danger-subtl'>Column</div>
                <div className='col-6 bg-dark-subtle'>Column</div>
                <div className='col bg-primary-subtle'>Column</div>
              </div>
            </div>

            <div className='container bg-danger mt-4'>
              <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                  <div className='col bg-primary'>Column</div>
                  <div className='col bg-secondary'>Column</div>
                  <div className='col bg-warning'>Column</div>
                  <div className='col bg-info-subtle'>Column</div>
                </div>
              </div>
            </div>

            <div className='container bg-success mt-5'>
              <div className='row row-cols-2 row-cols-lg-3'>
                <div className='col bg-primar'>Column</div>
                <div className='col bg-secondary'>Column</div>
                <div className='col bg-warning'>Column</div>
                <div className='col bg-danger'>Column</div>
                <div className='col bg-info'>Column</div>
                <div className='col bg-light'>Column</div>
                <div className='col-4 col-lg-2 bg-white'>Column 1</div>
                <div className='col-4 col-lg-2 bg-body'>Column 1</div>
                <div className='col-4 col-lg-2 bg-dark text-light'>
                  Column 1
                </div>
                <div className='col-4 col-lg-2 bg-black-subtle text-white'>
                  Column 1
                </div>
                <div className='col-4 col-lg-2 bg-primary'>Column 1</div>
                <div className='col-4 col-lg-2 bg-secondary'>Column 1</div>
              </div>
            </div>
          </div>
        </div>
        <h2> Nesting</h2>
        <div className='container'>
          <div className='container bg-danger'>
            <div className='row bg-warning'>
              <div className='col-sm-3 bg-success-subtle'>
                Level 1: .col-sm-3
              </div>
              <div className='col-sm-9 bg-warning-subtle'>
                <div className='row'>
                  <div className='col-8 col-sm-6 bg-primary'>
                    Level 2: .col-8 .col-sm-6
                  </div>
                  <div className='col-4 col-sm-6 bg-secondary'>
                    Level 2: .col-4 .col-sm-6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
