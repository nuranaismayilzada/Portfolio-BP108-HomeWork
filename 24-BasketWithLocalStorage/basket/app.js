const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

const cards = document.querySelector(".cards");
const basketCounter = document.querySelector(".basket_counter");

const createCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";
  card.id = item.id;

  const imageSec = document.createElement("img");
  imageSec.classList.add("card-img-top");
  imageSec.setAttribute("src", item.image);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const titleSec = document.createElement("h5");
  titleSec.classList.add("card-title");
  titleSec.innerText = item.title;

  const descSec = document.createElement("p");
  descSec.classList.add("card-text");
  descSec.innerText = item.price;

  const addToBasket = document.createElement("button");
  addToBasket.classList.add("btn");
  addToBasket.classList.add("btn-success");
  addToBasket.classList.add("m-3");
  addToBasket.innerText = "Add to Basket";

  let pilusBtn = document.createElement("span")
  pilusBtn.innerText = "+";
  pilusBtn.className = "pilus";
  pilusBtn.style.textAlign = "center";
  pilusBtn.style.fontSize = "30px";
  pilusBtn.style.borderRadius = "50%";
  pilusBtn.style.width = "50px";
  pilusBtn.style.border = "1px solid black";
  pilusBtn.style.backgroundColor = "pink"
  pilusBtn.style.borderColor = "transparent"
  pilusBtn.style.marginBottom = "40px";
  pilusBtn.style.color = "red"
  pilusBtn.addEventListener("click", () => {
    count.innerText = (+count.innerText) + 1
    price.innerText = item.price * (+count.innerText) + "AZN"
})


  let minusBtn = document.createElement("span")
  minusBtn.innerText = "-";
  minusBtn.className = "pilus";
  minusBtn.style.fontSize = "30px";
  minusBtn.style.textAlign = "center";
  minusBtn.style.borderRadius = "50%";
  minusBtn.style.width = "50px";
  minusBtn.style.border = "1px solid black";
  minusBtn.style.backgroundColor = "pink"
  minusBtn.style.borderColor = "transparent"
  minusBtn.style.color = "red"
  minusBtn.style.marginBottom = "40px";
  minusBtn.addEventListener("click", () => {
    if ((+count.innerText) == 1) {
        return (+count.innerText)
    }
    count.innerText = (+count.innerText) - 1
})


  let count = document.createElement("span")
  count.innerText = "0";;
  count.className = "countt";
  count.style.fontSize = "30px";
  count.style.textAlign = "center";
  count.style.borderRadius = "50%";
  count.style.width = "50px";
  count.style.border = "1px solid black";
  count.style.backgroundColor = "pink"
  count.style.borderColor = "transparent"
  count.style.marginBottom = "40px";
  count.style.color = "red"


  cardBody.append(titleSec, descSec,pilusBtn,count,minusBtn);
  card.append(imageSec, cardBody, addToBasket);

  cards.appendChild(card);

  addToBasket.addEventListener("click", addBasket);
};

products.map((elem) => {
  createCard(elem);
});

if (!localStorage.getItem("basket")) {
  localStorage.setItem("basket", JSON.stringify([]));
}

let basket = JSON.parse(localStorage.getItem("basket"));
setCountOfBasket(basket.length);

function setCountOfBasket(count) {
  if (count) {
    basketCounter.classList.add("shown");
    basketCounter.innerText = count;
  } else {
    basketCounter.classList.remove("shown");
  }
}

function addBasket() {
  const id = this.parentNode.id;
  //   const obj = {
  //     title: this.parentNode.children[1].children[0].innerText,
  //     price: this.parentNode.children[1].children[1].innerText
  //   }

  const selectedProduct = products.find((item) => item.id == id);

  const alreadyExist = basket.find((item) => item.id == id);
  if (!alreadyExist) {
    basket = [...basket, selectedProduct];
    localStorage.setItem("basket", JSON.stringify(basket));
    setCountOfBasket(basket.length);
  }
  basketCounter.innerText=count.innerText
}
