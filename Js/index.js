import { Categorias, Trabajos } from './listas.js';

function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'sidebar close';
    navbar.innerHTML = `
      <header>
          <div class="image-text">
              <span class="image">
                  <img src="assets/images/logo.png" alt="Logo">
              </span>
              <div class="text header-text">
                  <span class="name">ORT Almagro</span>
                  <span class="description">4 Info C</span>
              </div>
          </div>
          <i class="bx bx-chevron-right toggle"></i>
      </header>
      <div class="menu-bar">
          <div class="menu">
              <li class="search-box">
                  <i class="bx bx-search icon"></i>
                  <input type="search" id="formulario" placeholder="Buscar...">
                  <button id="boton" hidden></button>
              </li>
              <ul class="menu-links">
                  <li class="nav-link">
                      <a href="index.html">
                          <i class="bx bx-home-alt icon"></i>
                          <span class="text nav-text">Inicio</span>
                      </a>
                  </li>
                  ${Categorias.map(
                      (categoria) => `
                          <li class="nav-link">
                              <a href="trabajos.html">
                                  <i class="bx ${categoria.icon} icon"></i>
                                  <span class="text nav-text">${categoria.name}</span>
                              </a>
                          </li>
                      `
                  ).join('')}
              </ul>
          </div>
          <div class="bottom-content">
              <li class="mode">
                  <div class="moon-sun">
                      <i class="bx bx-moon icon moon"></i>
                      <i class="bx bx-sun icon sun"></i>
                  </div>
                  <span class="mode-text text">Modo Claro</span>
                  <div class="toggle-switch">
                      <span class="switch"></span>
                  </div>
              </li>
          </div>
      </div>
    `;
    return navbar;
}

function insertNavbar() {
    const container = document.getElementById("navbar-placeholder");
    const navbar = createNavbar();
    container.appendChild(navbar);
}

function agregarTrabajo(trabajo){
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

function filtrar() {
    const cardsContainer = document.querySelector("#cards-container");
    const texto = formulario.value.toLowerCase();
    let existe = false;
    
    cardsContainer.innerHTML = ``;
        
    for (let trabajo of Trabajos) {
      let title = trabajo.title.toLowerCase();
      if (title && title.indexOf(texto) !== -1) {
        existe = true;
        agregarTrabajo(trabajo);
      }
    }
    if (!existe) {
      console.log("No existe");
    }
}

window.onload = (event) => {
    insertNavbar();
    const body = document.querySelector("body");
    const footer = document.querySelector("footer");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const toggle = body.querySelector(".toggle");
    const searchBtn = body.querySelector(".search-box");
    const modeSwitch = body.querySelector('.toggle-switch');
    const modeText = body.querySelector(".mode-text");
    const formulario = document.querySelector("#formulario");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
        main.classList.toggle("close");
    });
      
    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
        main.classList.remove("close");
    });      

    modeSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");
        footer.classList.toggle("dark");
        if (body.classList.contains("dark")){
            modeText.innerHTML = "Modo Oscuro";
        } else {
            modeText.innerText = "Modo Claro";
        }
    });

    boton.addEventListener('click', filtrar);
    formulario.addEventListener('keyup', filtrar);
    filtrar();
};



