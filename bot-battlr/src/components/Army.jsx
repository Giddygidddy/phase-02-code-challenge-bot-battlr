import BotCard from './BotCard';

function Army({ enlistedBots }) {
  return (
    <div>
      {enlistedBots.map(bot => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default Army;
