let container = document.getElementById("container");
let data;

async function getData() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    data = await res.json();
    appendProducts(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();
// Append
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
  // console.log(data);
  data = data.sort(function (a, b) {
    return a.price - b.price;
  });
  appendProducts(data);
}

function sortHL() {
  data = data.sort(function (a, b) {
    return b.price - a.price;
  });
  appendProducts(data);
}
