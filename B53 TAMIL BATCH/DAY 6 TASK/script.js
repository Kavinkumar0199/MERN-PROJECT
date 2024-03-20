// Q3:Write a “person” class to hold all the details.


































// Q4:write a class to calculate the uber price.

class UberPrice {
  constructor(baseFare, duration, costPerMile, distance, costPerMinute) {
    this.baseFare = baseFare;
    this.duration = duration;
    this.costPerMile = costPerMile;
    this.distance = distance;
    this.costPerMinute = costPerMinute;
  }
  totalprice() {
    return (
      this.baseFare +
      this.distance * this.costPerMile +
      this.duration * this.costPerMinute
    );
  }
}
const myUber = new UberPrice(8, 12, 16, 24, 30);
console.log(myUber.totalprice());

 