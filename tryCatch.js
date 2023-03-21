let container = document.getElementById("container");
let data;

async function getData() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    data = await res.json();
    appendProducts(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();
function appendProducts(data) {
  container.innerHTML = null;
  data.forEach(function (ele) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.image;
    let title = document.createElement("p");
    title.innerText = ele.title;
    price = document.createElement("p");
    price.innerText = ele.price;

    div.append(img, title, price);
    container.append(div);
  });
}
function sortLH() {
  let cpyda = data;
  cpyda = data.sort(function (a, b) {
    return a.price - b.price;
  });
  appendProducts(cpyda);
}

function sortHL() {
  let cpyda = data;
  cpyda.sort(function (a, b) {
    return b.price - a.price;
  });
  appendProducts(cpyda);
  console.log(data);
}
// console.log("data", data);
function reset() {
  console.log(data);
  // appendProducts(data);
}

function filter() {
  let copy_data = data;
  let query = document.getElementById("query").value;

  copy_data = copy_data.filter(function (ele) {
    return ele.title.toLowerCase().includes(query);
  });
  appendProducts(copy_data);
}
