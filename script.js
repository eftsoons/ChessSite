const divpeople = document.querySelector(".tournament-people");
const peopleinfolist = document.querySelector(".tournament-people-info-list");
const buttonprev = document.querySelector(
  "#tournament-people-button-list-prev"
);
const buttonnext = document.querySelector(
  "#tournament-people-button-list-next"
);

// const xml = new XMLHttpRequest();
// xml.open("GET", "./listpeople.json", false);
// xml.send();
// const listpeople = JSON.parse(xml.responseText);

const infopeople = {
  indexlistpeople: 1,
  listpeople: [],
};

function GetListPeople() {
  fetch("./listpeople.json")
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        infopeople.listpeople = data;

        listpeoplerender(infopeople.indexlistpeople, infopeople.listpeople);
      } else {
        listpeoplerender(infopeople.indexlistpeople, null);
      }
    })
    .catch(() => {
      listpeoplerender(infopeople.indexlistpeople, null);
    });
}

GetListPeople();

function listpeopleprev() {
  infopeople.indexlistpeople--;

  listpeoplerender(infopeople.indexlistpeople, infopeople.listpeople);
}

function listpeoplenext() {
  infopeople.indexlistpeople++;

  listpeoplerender(infopeople.indexlistpeople, infopeople.listpeople);
}

function listpeoplerender(index, listpeople) {
  buttonprev.removeAttribute("disabled");
  buttonnext.removeAttribute("disabled");

  if (index == 1) {
    buttonprev.setAttribute("disabled", true);
  }

  if (!listpeople || index == listpeople.length) {
    buttonnext.setAttribute("disabled", true);
  }

  peopleinfolist.innerHTML = `<div class="tournament-people-info-list" data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-bottom">${index} <span class="opacity-[0.6]">/ ${
    listpeople ? listpeople.length : 1
  }</span></div>`;
  divpeople.innerHTML = "";

  if (listpeople && listpeople[index - 1]) {
    const Allpeople = listpeople[index - 1];

    for (let i = 0; i < Allpeople.length; i++) {
      const people = Allpeople[i];

      //tournament-people-div

      const div = document.createElement("div");
      div.classList.add("tournament-people-info");
      div.id = people.id;
      div.setAttribute("data-aos", "fade-up");

      const img = document.createElement("img");
      img.classList.add("tournament-people-img");
      img.src = people.img;

      const div2 = document.createElement("div");
      div2.classList.add("tournament-people-info-description");

      const h4 = document.createElement("h4");
      h4.textContent = people.name;

      const divspan = document.createElement("div");
      divspan.classList.add("tournament-people-div-description");

      const span = document.createElement("span");
      span.classList.add("tournament-people-description");
      span.textContent = people.description;

      divspan.appendChild(span);

      const a = document.createElement("a");
      a.href = "https://vk.com/shishkin666";
      a.target = "_blank";

      const button = document.createElement("button");
      button.classList.add("tournament-people-button");
      button.textContent = "Подробнее";

      a.appendChild(button);

      div2.appendChild(h4);
      div2.appendChild(divspan);

      div.appendChild(img);
      div.appendChild(div2);
      div.appendChild(a);

      divpeople.appendChild(div);
    }
  } else {
    const h4 = document.createElement("h4");
    h4.classList.add("w-full");
    h4.classList.add("text-center");
    h4.textContent = "Нет данных";

    divpeople.appendChild(h4);
  }
}
