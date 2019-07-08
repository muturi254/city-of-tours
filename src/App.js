import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faWindowClose, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';
import './App.scss';


// adding icons to the library
library.add(fab, faCheckSquare, faCoffee, faWindowClose, faCaretSquareDown)
// end of library 

function App() {
  return (
   <main>
      {/* <FontAwesomeIcon icon={['fab', 'google']} /> */}
      <Navbar />
      <TourList />
   </main>
  );
}

export default App;
