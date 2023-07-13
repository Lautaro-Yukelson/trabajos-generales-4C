import { Categorias, Trabajos } from './listas.js';

function completeNavbar() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.innerHTML += `
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

    `;
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
    completeNavbar();
    const body = document.querySelector("body"),
        footer = document.querySelector("footer"),
        sidebar = document.querySelector(".sidebar"),
        main = document.querySelector(".main"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector('.toggle-switch'),
        modeText = body.querySelector(".mode-text"),
        formulario = document.querySelector("#formulario");

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