import { Practice } from './components/Practice';
import { Accordion } from './components/Accordion';
import { Buttons } from './components/ Buttons';
import { Checks } from './components/Checks';
import { Containers } from './components/Containers';
import { Grid } from './components/Grid';

function App() {
  return (
    <div>
      <div className='accordion accordion-flush' id='accordionFlushExample'>
        <div className='accordion-item'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#flush-collapseOne'
            aria-expanded='false'
            aria-controls='flush-collapseOne'
          >
            Several Examples
          </button>
        </div>
        <div
          id='flush-collapseOne'
          className='accordion-collapse collapse'
          aria-labelledby='flush-headingOne'
        >
          <Practice />
          <Accordion />
          <Buttons />
          <Checks />
          <Containers />
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
