// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.error("Klaida: ", error));

// async function getPost(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const json = await response.json();
//   return json.title;
// }

// getPost(2).then((title) => console.log(title));

async function getUsers() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/Users`
    );

    if (!response.ok) {
      console.error(`request failed`);
      if (response.status === 404) {
        const erorrmsg = document.createElement("p");
        erorrmsg.textContent = "User was not found...";
        document.body.append(erorrmsg);
      }
      return;
    }

    const json = await response.json();

    json.forEach((user) => {
      if (validateUser(user)) {
        displayUser(user);
      }
      console.error(`User with email "${user.email}" is not valid`);
    });
  } catch (error) {
    console.error(error);
  }
}
function validateUser(user) {
  if (
    user.email.includes(".net") ||
    user.email.includes(".com") ||
    user.email.includes(".org")
  ) {
    return true;
  }

  return false;
}
function displayUser(user) {
  const maindiv = document.createElement("div");
  maindiv.classList.add("user");

  const p1 = document.createElement("p");
  p1.textContent = user.name;
  maindiv.append(p1);

  const p2 = document.createElement("p");
  p2.textContent = user.username;
  maindiv.append(p2);

  const p3 = document.createElement("p");
  p3.textContent = user.email;
  maindiv.append(p3);

  document.body.append(maindiv);
}

getUsers();
