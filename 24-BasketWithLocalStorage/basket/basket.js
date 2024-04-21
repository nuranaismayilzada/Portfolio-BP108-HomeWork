let basket = JSON.parse(localStorage.getItem("basket")) ?? [];

const cards = document.querySelector(".cards");
let deleteBtnn = document.querySelector(".delete")
            deleteBtnn.innerText = "DELETE";
            deleteBtnn.style.color = "white";
            deleteBtnn.className = "deletbtn"
            deleteBtnn.style.width = "100px";
            deleteBtnn.style.height = "40px";
            deleteBtnn.style.borderRadius = "0px";
            deleteBtnn.style.border = "none";
            deleteBtnn.style.backgroundColor = "red";
            deleteBtnn.style.marginLeft = "260px";

            deleteBtnn.addEventListener("click",()=>{
                cards.innerHTML=" ";
            })
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

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
  deleteBtn.classList.add("m-3");
  deleteBtn.innerText = "Delete";

  cardBody.append(titleSec, descSec);
  card.append(imageSec, cardBody, deleteBtn);

  cards.appendChild(card);

  deleteBtn.addEventListener("click", deleteFromBasket);
};

basket.map((elem) => {
  createCard(elem);
});

function deleteFromBasket() {
  const id = this.parentNode.id;

  const newBasket = basket.filter((item) => item.id !== +id);

  localStorage.setItem("basket", JSON.stringify(newBasket));

  window.location.reload();

  cards.innerHTML = "";

  basket.map((elem) => {
    createCard(elem);
  });
}
