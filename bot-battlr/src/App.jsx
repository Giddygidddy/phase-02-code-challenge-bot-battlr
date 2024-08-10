import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import BotList from './components/BotList';
import BotDetails from './components/BotDetails';
import Army from './components/Army';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => {
        // Log the data to inspect it
        console.log(data);
  
        // Optional: Remove duplicates by ID
        const uniqueBots = Array.from(new Set(data.map(bot => bot.id)))
          .map(id => data.find(bot => bot.id === id));
        setBots(uniqueBots);
      });
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BotList bots={bots} />} />
        <Route path="/bot/:id" element={<BotDetails bots={bots} />} />
        <Route path="/army" element={<Army enlistedBots={enlistedBots} />} />
      </Routes>
    </Router>
  );
}

export default App;
