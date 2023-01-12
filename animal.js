//cia kursiu klase, sablona, template
//tevine klase
class Animal {
    constructor(name, age){
        //mano sukurto objekto savybes properties columns
        this.name = name;
        this.age = age;
    }
    //mano sukurto objekto funkcionalumas, 
    //ka jis gales daryti-> metodas
    setNewAge(){
        this.age +=1;
    }
    getAnimalInfo(){
        console.log(this.name, this.age);
    }
}

export default Animal;