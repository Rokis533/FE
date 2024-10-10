const person = {
  firstName: "Rokas",
  lastName: "Slaboševičius",
  age: 99,
  hobbies: ["Futbolas", "Programuoti", "Keliauti"],
  address: {
    country: "Lithuania",
    city: "Kaunas",
  },
  getInitials() {
    return this.firstName[0] + this.lastName[0];
  },
};

person.hobbies.push("Gaminti maistą(Cookinti)");

person.email = "Rokas@Prosistemos.com";

person.isAgeOfConsent = function () {
  return this.age > 18;
};

const deepCopy = JSON.parse(JSON.stringify(person)); //Deep copy

const { hobbies, lastName, age } = person;

//console.log(hobbies);

const newPerson = { hobbies, vardas: lastName, age };

console.log(newPerson);
