let cartTable = document.querySelector(".table-row")
let TotalPrice = document.querySelector("#total")
userCart = JSON.parse(localStorage.getItem("userCart"))

function Delete(id) {
  userCart = userCart.filter(key => key.id != id);
  localStorage.setItem("userCart",JSON.stringify(userCart))
  cartTable.innerHTML=""
      drawCart()    
}
function drawCart() {
  let totalPrice = 0;
  const cartTable = document.getElementById("cartTable");
  const totalElement = document.getElementById("total");

  cartTable.innerHTML = ""; // Clear the table before redrawing

  userCart.map((key) => {
    let newPrice = parseInt(key.price) * parseInt(key.quantity);
    cartTable.innerHTML += `
      <tr>
        <td>${key.name}</td>
        <td><b>${key.quantity}</td>
        <td><img style="width: 50px;height: 50px;" src="${key.img}" alt=""></td>
        <td><b>${newPrice}</td>
        <td><button onclick="Delete(${key.id})" class="btn btn-danger">Delete</button></td>
      </tr>
    `;

    totalPrice += newPrice;
  });

  totalElement.textContent = "Total Price: " + totalPrice;
}

drawCart();
  