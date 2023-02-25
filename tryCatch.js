async function getData() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    appendProducts(data);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();

// Append
let container = document.getElementById("container");

function appendProducts(data) {
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
