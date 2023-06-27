class HeaderTitleGid {
  render() {
    let htmlHeaderGid = "";
    HEADER.forEach(({ city, map, name, question, about, companion }) => {
      htmlHeaderGid += `
            <li class="header-elements">
            <img class="header-elements__city" src="${city}" >
            <img class="header-elements__map" src="${map}" >
            <span class="header-elements__name">${name}</span>
            <span class="header-elements__about">${about}</span>
            <span class="header-elements__question">${question}</span>
            <span class="header-elements__companion">${companion}</span>
        </li>
            `;
    });
    const htmlHeaderUl = `
        <ul class="header-container">${htmlHeaderGid}</ul>
        `;
    ROOT_INFORMATION_GID.innerHTML = htmlHeaderUl;
  }
}
const headerQuestionGid = new HeaderTitleGid();
headerQuestionGid.render();
