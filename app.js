// function area
function getId(idName) {
  return document.getElementById(idName);
}

function tagCreate(tagName) {
  return document.createElement(tagName);
}


// invoice date setup
let today = new Date();
document.getElementById("show-date").innerText = today.toDateString();
// invoice print button
let printBtn = getId("print-page");
printBtn.addEventListener("click", function () {
  window.print();
});


//  buyer input collect and place the right position

const detailSubmitBtn = getId("detail-submit-btn");
const buyerDetailsInput = getId("buyer-details-input");
const buyerInfo = getId("buyer-info");
detailSubmitBtn.addEventListener("click", function () {
  const userText = buyerDetailsInput.value;
  buyerInfo.style.textTransform = "uppercase";
  buyerInfo.innerText = userText;
  buyerDetailsInput.value = null;
});

// data collection by clicking button
const addDetailsBtn = getId("add-details-btn");
addDetailsBtn.addEventListener("click", function () {

  const infoTable = getId("info-table");
  const subTotal = getId("sub-total");
  const tax = getId("tax");
  const grandTotal = getId("grand-total");
  const grandTotal2 = getId("grand-total-2");
  const itemNameInput = getId("item-name-input").value;
  const itemPriceInput = parseFloat(getId("item-price-input").value);
  const itemQuantityInput = parseFloat(getId("item-quantity-input").value);
  const tr = tagCreate("tr");
  const th = tagCreate("th");
  const td1 = tagCreate("td");
  const td2 = tagCreate("td");
  const td3 = tagCreate("td");
  td3.classList.add("product-price");
  if (typeof itemNameInput == "string" && itemPriceInput > 0 && itemQuantityInput > 0) {
    th.innerText = itemNameInput;
    td1.innerText = itemPriceInput;
    td2.innerText = itemQuantityInput;
    td3.innerText = parseFloat(td1.innerText) * parseFloat(td2.innerText);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    getId("item-name-input").value = "";
    getId("item-price-input").value = "";
    getId("item-quantity-input").value = "";
    let getPrice = document.getElementsByClassName("product-price");
    let productPrice = 0;
    for (let i of getPrice) {
      let price = parseFloat(i.innerText);
      productPrice = productPrice + price;
    }
    const productTax = productPrice * 15 / 100;
    subTotal.innerText = productPrice;
    tax.innerText = productTax;
    const productGrandTotal = productPrice + productTax;
    grandTotal.innerText = productGrandTotal;
    grandTotal2.innerText = productGrandTotal;
  }else {
    const errorMessage = "Your price or Quantity is negative";
    const error = getId("error");
    error.innerText =errorMessage;
  }

})