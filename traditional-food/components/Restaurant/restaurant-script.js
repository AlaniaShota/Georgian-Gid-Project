class BestRestaurant {
  render() {
    let htmlRestaurant = "";
    RESTAURANT.forEach(({ img, name, location, visit }) => {
      htmlRestaurant += `
            <li class="restaurant-element">
              <img class="restaurant-element__img" src="${img}" >
                <span class="restaurant-element__name">${name}</span>
                <span class="restaurant-element__location">${location}</span>
              <a href="${visit}" target="_blank">
                <button class="button-48 restaurant-btn" role="button">
                  <span class="text">Visit Website</span>
                </button>
              </a>
            </li>
            
        `;
    });
    const htmlRestaurantUl = `
        <div class="container">
          <div class="title-text">Best</div>
          <ul class="restaurant-card">${htmlRestaurant}</ul>
          <button class="button-48 restaurant-card__see-more" role="button"><span class="texts">Show More</span></button>
          
        </div>
        
    `;
    ROOT_RESTAURANT.innerHTML = htmlRestaurantUl;
  }
}
const restaurantCard = new BestRestaurant();
restaurantCard.render();

//See More Cards
let loadMoreBtn = document.querySelector(".restaurant-card__see-more");
let cardLength = 3;
loadMoreBtn.onclick = () => {
  let cards = [
    ...document.querySelectorAll(
      ".container .restaurant-card .restaurant-element "
    ),
  ];
  for (let i = cardLength; i < cardLength + 3; i++) {
    cards[i].style.display = "inline-block";
  }
  cardLength += 3;
  if (cardLength > cards.length) {
    loadMoreBtn.style.display = "none";
  }
};
