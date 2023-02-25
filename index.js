let x = fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    //   console.log(res);
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });
