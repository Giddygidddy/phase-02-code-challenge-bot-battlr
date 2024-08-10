import { useEffect, useState } from 'react';
import BotCard from './BotCard';

function BotList() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBots(data);
      });
  }, []);

  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotList;
