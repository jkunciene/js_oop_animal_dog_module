import Dog from './dog.js';

console.log(Dog);

//kuriame konkretu objekta Suniuka
const Rikis = new Dog("Rikis", 3, 4, "Pilkas");
Rikis.printInfo();
console.log(Rikis.legs);
Rikis.increaseAge();
Rikis.printInfo();