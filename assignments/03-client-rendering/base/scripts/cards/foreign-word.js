import ForeignWord from "../base/cards/foreign-word.js";
import Card from "../card.js";

ForeignWord.prototype.render = function (...) {
  // this.data

  return Card.prototype.render.call(
    this,
    ...
  );
};

export default ForeignWord;
