import './BotCard.css';

function BotCard({ bot }) {
  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.image} alt={bot.name} />
      <p>{bot.description}</p>
    </div>
  );
}

export default BotCard;
