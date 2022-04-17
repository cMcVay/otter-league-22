
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TeamPage from './components/TeamPage';
import Home from './components/Home';
import Roster from './components/Roster';
import StandingsPage from './components/StandingsPage';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Team/:teamID" element={<TeamPage />}/>
        <Route path="/Roster/:teamID" element={<Roster />}/>
        <Route path="/Standings" element={<StandingsPage />}/>
      </Routes>
    </Router>
  );
}


export default App;
