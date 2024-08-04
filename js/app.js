const container = document.querySelector(".container");
const coffees = [
  { name: "Cappuccino", image: "/images/coffee1.jpg" },
  { name: "Flat white", image: "/images/coffee2.jpg" },
  { name: "latte", image: "/images/coffee3.jpg" },
  { name: "Caffe Machiato", image: "/images/coffee4.jpg" },
  { name: " Espresso", image: "/images/coffee5.jpg" },
  { name: " Caffe macho", image: "/images/coffee6.jpg" },
  { name: "Americano", image: "/images/coffee7.jpg" },
  { name: "Turkish coffee", image: "/images/coffee8.jpg" },
  { name: "Cafe Au lait", image: "/images/coffee9.jpg" },
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;

  
  const tasteButtons = document.querySelectorAll(".card--link");
  tasteButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thanks for your order!");
    });
  });
};
    

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}