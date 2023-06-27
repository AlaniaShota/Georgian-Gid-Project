// let dishesMap = [];
class GeorgianDishes {
  constructor() {
    this.classNameActive = "active-button";
    this.labelAdd = "Read More";
  }
  handleSetLocaleStorage(element, id) {
    const { pushDishes, dishes } = localStorageUtil.putGeorgianDishes(id);
    if (pushDishes) {
      element.classList.add(this.classNameActive);
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    modalCard.render();
  }

  render() {
    const dishesStore = localStorageUtil.getGeorgianDishes();
    let htmlDishes = "";
    FOOD.map(({ id, img, category, name, location, about }) => {
      let activeClass = "";
      let activeText = "";
      if (dishesStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }
      htmlDishes += `
        <li class="traditional-food-elements">
            <img class="traditional-food-elements__img" src="${img}" >
            <span class="traditional-food-elements__category">${category}</span>
            <span class="traditional-food-elements__name">${name}</span>
            <span class="traditional-food-elements__location">${location}</span>
            <p class="traditional-food-elements__about">${about}</p>
            <button class="button-48 read-more-btn" role="button" onclick="georgianDishesCard.handleSetLocaleStorage(this, '${id}')">
            <span class="text${activeClass}">${activeText}</span>
            </button>
        </li>
      `;
    });
    const htmlDishesUl = `
     <div class="content">
      <ul class="traditional-food-card">${htmlDishes}</ul>
      <button class="button-48 traditional-food-card__see-more-cards" role="button">
      <span class="text">Show More</span>
     </button>
     </div>
    `;
    ROOT_DISHES.innerHTML = htmlDishesUl;
  }
  //
}
let georgianDishesCard = new GeorgianDishes();
georgianDishesCard.render();

//Show Card Button
let showMoreCard = document.querySelector(
  ".traditional-food-card__see-more-cards"
);
let dishesCardsLength = 3;
showMoreCard.onclick = () => {
  let cardsArr = [
    ...document.querySelectorAll(
      ".content .traditional-food-card .traditional-food-elements "
    ),
  ];
  for (let i = dishesCardsLength; i < dishesCardsLength + 9; i++) {
    cardsArr[i].style.display = "inline-block";
  }
  dishesCardsLength += 9;
};

//Dishes information
let dishesLength = 220;
let dishesText = document.querySelectorAll(".traditional-food-elements__about");
dishesText.forEach((dishesText) => {
  if (dishesText.textContent.length < dishesLength) {
    dishesText.nextElementSibling.style.display = "none";
  } else {
    let hiddenText = dishesText.textContent.slice(0, dishesLength);
    let newText = dishesText.textContent.slice(dishesLength);
    dishesText.innerHTML = `${hiddenText}...<span class = 'hide-more'>${newText}</span>`;
  }
});

//Modal Card
class ModalCard {
  constructor() {
    this.labelRemove = "Read Less";
  }
  render() {
    const dishesStore = localStorageUtil.getGeorgianDishes();
    let htmlDishes = "";
    FOOD.forEach(({ id, img, map, category, name, location, about }) => {
      let activeText = "";
      if (dishesStore.indexOf(id) !== -1) {
        activeText = this.labelRemove;
        htmlDishes += `
          <div class="popup-container">
            <div class="popup-content">
                <div class="img-content">
                  <img class="modal__img" src="${img}" />
                  <img class="modal__map" src="${map}" />
                  <p class="modal__category">${category}</p>
                  <h3 class="modal__name">${name}</h3>
                  <p class="modal__location">${location}</p>
                </div>
                <p class="modal__about">${about}</p>
                <button class="button-48 open" role="button" onclick="georgianDishesCard.handleSetLocaleStorage(this, '${id}')">
                  <span class="text">${activeText}</span>
                </button>
            </div>
        </div>
          `;
      }
    });

    const html = `
        
        <div class="popup">${htmlDishes}</div>
      `;
    ROOT_MODAL_CARD.innerHTML = html;
  }
}
const modalCard = new ModalCard();

const searchInput = document.querySelector("#search");
const foundSearch = document.querySelector(".search-card");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  FOOD.filter((FOOD) => {
    FOOD.name.toLowerCase().includes(value) ||
      FOOD.category.toLowerCase().includes(value);

    // foundSearch.innerHTML = `
    //   <span class="found">${FOOD.category}</span>
    //   <span class="found">${FOOD.name}</span>
    // `
    console.log(FOOD);
  });
});

// const input = document.querySelector("#searchBar");
// let query = input.value;
// console.log("Query:", query);
// .filter((eventData) => {
//   if (query === "") {
//     return eventData;
//   } else if (eventData.name.toLowerCase().includes(query.toLowerCase())) {
//     return eventData;
//   }
// })
