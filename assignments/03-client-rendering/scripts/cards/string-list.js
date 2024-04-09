import StringList from "../base/cards/string-list.js";
import Card from "../card.js";

StringList.prototype.render = function (...) {
  // this.data

  return Card.prototype.render.call(
    this,
    ...
  );
};

export default StringList;
