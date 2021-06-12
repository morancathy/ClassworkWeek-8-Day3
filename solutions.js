class Cat{
constructor(name, age, species) {
  this.name = name;
  this.age = age;
  this.species = species;
}
}

const Cathy = new Cat('Cathy', 9, 'human');
const Boe = new Cat('Boe', 87, 'feline');
console.log(Cathy, Boe);

const agesCat = (item) => {
  item.age = item.age +1;
}
agesCat(Cathy);
console.log(Cathy, Boe);

const arrayCats = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'];
for(let i = 0; i < arrayCats.length; i++){
  arrayCats[i] = new Cat(this.name, this.age, this.species)

}
console.log(arrayCats[3])

const catPerson = {

}

catPerson.newKey = []
console.log(catPerson)


// Part 3 Constructors        //I didn't finish  :(
class Pirate{
  consturctor(name, eyes, legs, living){
    this.name = name;
    this.eyes = eyes;
    this.legs = legs;
    this.living = living;
  }

  lostEye() {
    this.eyes --;
  }
  lostLegs() {
      this.legs --;
  }
  alive() {
    this.living = true;
  }
}

const arrayPirates1 = ['Pirate1', 'Pirate2', 'Pirate3'];
for(let i = 0; i < arrayPirates1.length; i++){
  arrayPirates1[i] = new Pirate(this.name, this.eyes, this.legs, this.living)
}
const arrayPirates2 = ['Pirate4', 'Pirate5', 'Pirate6'];
for(let i = 0; i < arrayPirates2.length; i++){
  arrayPirates1[i] = new Pirate(this.name, this.eyes, this.legs, this.living)
}
