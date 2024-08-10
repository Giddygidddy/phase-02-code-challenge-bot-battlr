import { useParams } from 'react-router-dom';

function BotDetails({ bots }) {
  const { id } = useParams();
  const bot = bots.find(b => b.id === parseInt(id));

  if (!bot) {
    return <p>Bot not found</p>;
  }

  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.image} alt={bot.name} />
      <p>{bot.description}</p>
    </div>
  );
}

export default BotDetails;
