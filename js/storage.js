// localStorage.setItem("Name", "Rokas");
// localStorage.setItem("IsLoggedin", true);

const h1Element = document.getElementById("hello");
// const name = localStorage.getItem("Name");
// const isLoggedin = localStorage.getItem("IsLoggedin") === "true";

const user = JSON.parse(localStorage.getItem("User"));

let text = `Hello, ${user.name} `;

if (user.age > 18) {
  text = text + "You Are more then 18 ";
}

if (user.degree === "Masters") {
  text = text + " and Next Phd ";
}
for (let index = 0; index < user.hobbies.length; index++) {
    text = text + user.hobbies[index] + " ";
}


h1Element.textContent = text;

//localStorage.removeItem("IsLoggedin");

console.log(localStorage.length);

// const user = {
//   name: "Rokas",
//   age: 25,
//   degree: "Masters",
//   hobbies: ["Futbolas", "Programuoti", "Keliauti"],
//   address: {
//     country: "Lithuania",
//     city: "Kaunas",
//   },
// };

// const userJsonString = JSON.stringify(user);

// localStorage.setItem("User", userJsonString);
