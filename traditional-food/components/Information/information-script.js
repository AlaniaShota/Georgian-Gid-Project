class HeaderTitleDishes {
  render() {
    let htmlHeader = "";
    HEADER.forEach(({ city, map, name, question, about, recommendation }) => {
      htmlHeader += `
        <li class="header-elements">
            <img class="header-elements__city" src="${city}" >
            <img class="header-elements__map" src="${map}" >
            <span class="header-elements__name">${name}</span>
            <span class="header-elements__about">${about}</span>
            <span class="header-elements__question">${question}</span>
            <span class="header-elements__recommendation">${recommendation}</span>
        </li>
      `;
    });
    const htmlHeaderUl = `
        <ul class="header-container">${htmlHeader}</ul>
    `;
    ROOT_INFORMATION_TRADITIONAL_FOOD.innerHTML = htmlHeaderUl;
  }
}
const headerQuestion = new HeaderTitleDishes();
headerQuestion.render();
