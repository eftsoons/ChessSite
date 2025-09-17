const divpeople = document.querySelector(".tournament-people");
const peopleinfolist = document.querySelector(".tournament-people-info-list");

const infopeople = {
  indexlistpeople: 1,
  listpeople: [
    [
      {
        id: 1,
        name: "Хозе-Рауль Капабланка",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 2,
        name: "Эммануил Ласкер",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 3,
        name: "Александр Алехин",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
    ],
    [
      {
        id: 4,
        name: "Хозе-Рауль Капабланка2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 5,
        name: "Эммануил Ласкер2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 6,
        name: "Александр Алехин2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
    ],
    [
      {
        id: 7,
        name: "Хозе-Рауль Капабланка2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 8,
        name: "Эммануил Ласкер2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 9,
        name: "Александр Алехин2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
    ],
    [
      {
        id: 10,
        name: "Хозе-Рауль Капабланка2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 11,
        name: "Эммануил Ласкер2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 12,
        name: "Александр Алехин2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
    ],
    [
      {
        id: 13,
        name: "Хозе-Рауль Капабланка2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 14,
        name: "Эммануил Ласкер2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 15,
        name: "Александр Алехин2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
    ],
    [
      {
        id: 16,
        name: "Хозе-Рауль Капабланка2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 17,
        name: "Эммануил Ласкер2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
      {
        id: 18,
        name: "Александр Алехин2",
        img: "./img/People.png",
        description: "Чемпион мира по шахматам",
      },
    ],
  ],
};

listpeoplerender(infopeople.indexlistpeople);

function listpeopleprev() {
  if (infopeople.indexlistpeople > 1) {
    infopeople.indexlistpeople--;

    listpeoplerender(infopeople.indexlistpeople);
  }
}

function listpeoplenext() {
  if (infopeople.indexlistpeople < infopeople.listpeople.length) {
    infopeople.indexlistpeople++;

    listpeoplerender(infopeople.indexlistpeople);
  }
}

function listpeoplerender(index) {
  peopleinfolist.textContent = `${index}/${infopeople.listpeople.length}`;
  divpeople.innerHTML = "";

  const Allpeople = infopeople.listpeople[index - 1];

  for (let i = 0; i < Allpeople.length; i++) {
    const people = Allpeople[i];

    const div = document.createElement("div");
    div.classList.add("tournament-people-info");
    div.id = people.id;

    const img = document.createElement("img");
    img.classList.add("tournament-people-img");
    img.src = people.img;

    const h5 = document.createElement("h5");
    h5.textContent = people.name;

    const span = document.createElement("span");
    span.classList.add("tournament-people-description");
    span.textContent = people.description;

    const button = document.createElement("button");
    button.classList.add("tournament-people-button");
    button.textContent = "Подробнее";

    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(span);
    div.appendChild(button);

    divpeople.appendChild(div);
  }
}
