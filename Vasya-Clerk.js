function Clerk(name) {
  this.name = name;

  this.money = {
    25 : 0,
    50 : 0,
    100: 0
  };

  // element = 25, 50, 100
  this.sell = function(element, index, array) {
    this.money[element]++;
    switch(element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  }
}

function tickets(peopleInLine) {
  var clerk = new Clerk('Vasya');
  return peopleInLine.every(clerk.sell.bind(clerk)) ? 'YES' : 'NO';
}
