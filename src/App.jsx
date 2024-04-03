import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

import './components/CoreConcept.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts CORE_CONCEPTS={CORE_CONCEPTS} />

        <Examples EXAMPLES={EXAMPLES} />
      </main>
    </>
  );
}

export default App;
