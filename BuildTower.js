function towerBuilder(nFloors) {
  let space = " ";
  let star = "*";
  let spaces, stars, tower = [];
  for (let index = 1; index <= nFloors; index++) {
    spaces = space.repeat(nFloors - index);
    stars = star.repeat((2 * index) - 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
