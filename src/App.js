

import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import GlobalStyle from './GlobalStyles';

import styled from 'styled-components';



function App() {



  return (

    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
      </Routes>
    </Router>


  );
}

export default App;
