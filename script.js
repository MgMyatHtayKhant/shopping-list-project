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
  const productItem = `<span><li class="list-group-item">${productCounts}. ${titleFormat(
    productName
  )}</li><i class="fa-solid fa-trash-can"></i></span>`;
  orderListsTag.innerHTML += productItem;
  userInputTag.value = "";
}

userInputTag.addEventListener("change", createProduct);

orderListsTag.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    if (e.target.classList.contains("line-through")) {
      e.target.classList.remove("line-through");
    } else {
      e.target.classList.add("line-through");
    }
  }

  if (e.target && e.target.nodeName == "I") {
    e.target.parentElement.remove();
  }
});
