import PlayingCard from "../base/cards/playing-card.js";
import Card from "../card.js";

PlayingCard.prototype.render = function (...) {
  // this.data

  return Card.prototype.render.call(
    this,
    ...
  );
};

export default PlayingCard;
