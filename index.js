// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const category = ["Bulat"];

// bilangan ganjil genap
function bilanganGanjilGenap(num) {
  if (num % 2 === 0) {
    category.push("Genap");
  } else {
    category.push("Ganjil");
  }
  return category;
}

function bilanganCacah(num) {
  if (num < 0) {
    return false;
  } else {
    category.push("Cacah");
  }
  return category;
}

function bilanganNegative(num) {
  if (num > 0) {
    return false;
  } else {
    category.push("Negative");
  }
  return category;
}

function bilanganAsli(num) {
  if (num > 0) {
    category.push("Asli");
  } else {
    return false;
  }
  return category;
}

function bilanganNol(num) {
  if (num === 0) {
    category.push("Nol");
  } else {
    return false;
  }
  return category;
}

function bilanganPrima(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      category.push("Komposit");
    } else {
      category.push("Prima");
    }
    return category;
  }
}

// bilanganPrima(10);

function bilangan(num) {
  let ganap = bilanganGanjilGenap(num);
  let cacah = bilanganCacah(num);
  let negative = bilanganNegative(num);
  let nol = bilanganNol(num);
  let prima = bilanganPrima(num);
  let asli = bilanganAsli(num);
  return category.sort();
}

console.log(bilangan(11));
// console.log(bilanganGanjilGenap(4))
