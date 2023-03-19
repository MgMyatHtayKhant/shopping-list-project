const orderListsTag = document.querySelector(".list-group");
const userInputTag = document.querySelector(".user-input");

let productCounts = 0;

function titleFormat(word) {
  return word
    .split(" ")
    .map((each) => each[0].toUpperCase() + each.slice(1).toLowerCase())
    .join(" ");
}

function createProduct(e) {
  const productName = userInputTag.value;
  if (!productName) {
    return;
  }
  productCounts += 1;
  const productItem = `<li class="list-group-item">${productCounts}. ${titleFormat(
    productName
  )}</li>`;
  orderListsTag.innerHTML += productItem;
  userInputTag.value = "";
}

userInputTag.addEventListener("change", createProduct);
