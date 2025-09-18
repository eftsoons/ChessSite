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
  peopleinfolist.innerHTML = `<div class="tournament-people-info-list" data-aos="zoom-in" data-aos-delay="300" data-aos-anchor-placement="top-bottom">${index} <span class="opacity-[0.6]">/ ${infopeople.listpeople.length}</span></div>`;
  divpeople.innerHTML = "";

  const Allpeople = infopeople.listpeople[index - 1];

  for (let i = 0; i < Allpeople.length; i++) {
    const people = Allpeople[i];

    const div = document.createElement("div");
    div.classList.add("tournament-people-info");
    div.id = people.id;
    div.setAttribute("data-aos", "fade-up");

    const img = document.createElement("img");
    img.classList.add("tournament-people-img");
    img.src = people.img;

    const div2 = document.createElement("div");
    div2.classList.add("tournament-people-info-description");

    const h5 = document.createElement("h4");
    h5.textContent = people.name;

    const span = document.createElement("span");
    span.classList.add("tournament-people-description");
    span.textContent = people.description;

    const a = document.createElement("a");
    a.href = "https://vk.com/shishkin666";
    a.target = "_blank";

    const button = document.createElement("button");
    button.classList.add("tournament-people-button");
    button.textContent = "Подробнее";

    a.appendChild(button);

    div2.appendChild(h5);
    div2.appendChild(span);

    div.appendChild(img);
    div.appendChild(div2);
    div.appendChild(a);

    divpeople.appendChild(div);
  }
}
