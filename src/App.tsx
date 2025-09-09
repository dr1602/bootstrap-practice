import { GeneralAccordion } from './components/GeneralAccordion';

import { Practice } from './components/Practice';
import { Accordion } from './components/Accordion';
import { Buttons } from './components/ Buttons';
import { Checks } from './components/Checks';
import { Containers } from './components/Containers';
import { Grid } from './components/Grid';

function App() {
  return (
    <>
      <GeneralAccordion
        title='Varios Componentes'
        node={
          <>
            <Practice />
            <Accordion />
            <Buttons />
            <Checks />
            <Containers />
            <Grid />
          </>
        }
      />
    </>
  );
}

export default App;
