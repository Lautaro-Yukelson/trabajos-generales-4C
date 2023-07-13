import { Trabajos } from './listas.js';

function agregarTrabajo(trabajo) {
  const cardsContainer = document.querySelector("#cards-container");
  cardsContainer.innerHTML += `
      <div class="card">
          <a href="${trabajo.link}" target="_BLANK">
              <div class="card-image">
                  <img src="${trabajo.img}" alt="">
              </div>
              <p class="card-title">${trabajo.title}</p>
              <p class="card-body">
                  ${trabajo.desc}
              </p>
              <p class="footerC">Por <span class="by-name">${trabajo.author}</span> - <span class="date">${trabajo.curso}</span></p>
          </a>
      </div>
  `;
}

function filtrarPorCategoria(categoria) {
  const cardsContainer = document.querySelector("#cards-container");
  const categoriaName = document.querySelector("#categoria-name");
  cardsContainer.innerHTML = "";

  const trabajosFiltrados = Trabajos.filter(
    (trabajo) => trabajo.category === categoria
  );
  trabajosFiltrados.forEach((trabajo) => {
    agregarTrabajo(trabajo);
  });

  categoriaName.textContent = categoria;
}

window.onload = (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoria = urlParams.get('categoria');
  filtrarPorCategoria(categoria);
};
