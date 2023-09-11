//
let person =
{
    name : "Adhi",
    age : 18,
    gender : "male",
    eyecolor :"black",
    cars:{
          car1 : "Benz",
          car2 : "BMW"
    }
}
for(i in person.cars){
    console.log(person.cars[i]);
}