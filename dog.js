//1. importuotis tevine klase
//2.tevines klases Animal pagrindu kursime child klase Dog
import Animal from './animal.js';

// console.log(Animal);

class Dog extends Animal {
    constructor(name, age, legs, fur){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
    }

    //objekto funkcionalumai -> metodai
    increaseAge(){
        super.setNewAge()
    }
    printInfo(){
        super.getAnimalInfo();
        console.log(this.legs, this.fur);
    }
}

export default Dog;