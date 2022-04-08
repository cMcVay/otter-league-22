
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TeamPage from './components/TeamPage';
import Home from './components/Home';
import Roster from './components/Roster';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Team/:teamID" element={<TeamPage />}/>
        <Route path="/Roster/:teamID" element={<Roster />}/>
      </Routes>
    </Router>
  );
}


export default App;
