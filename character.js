let character;

const getCharacter = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const respJ = await response.json();

  return createCards(respJ);
};

const createCards = (data) => {
  console.log(data);

  const div = document.createElement("div");
  div.setAttribute("class", "card");

  const image = document.createElement("img");
  image.setAttribute("src", data.image);
  div.appendChild(image);

  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const name = document.createElement("h4");
  name.innerHTML = "Nome: " + data.name;
  container.appendChild(name);

  const specie = document.createElement("p");
  specie.innerHTML = "Epécie: " + data.species;
  container.appendChild(specie);

  const episodes = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = "Episodes";
  const tbody = document.createElement("tbody");
  const allEp = data.episode;
  let alleps = [];

  for (ep in allEp) {
    alleps += "<td>" + allEp[ep] + "</td>";
  }

  tbody.innerHTML = alleps;
  console.log(alleps);

  episodes.appendChild(thead);
  episodes.appendChild(tbody);

  container.appendChild(episodes);

  div.appendChild(container);

  document.getElementById("section-character").appendChild(div);
};

getCharacter(1);
