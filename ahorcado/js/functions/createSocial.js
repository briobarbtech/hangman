import { redesSociales } from "./env/words.js";
const sectorRedes = document.getElementById('social-me');

const cardSocial = (prop) => {
    return `<a href=${prop.link}>
                ${prop.icon}
                <p class="name-social" id="name-social">${prop.name}</p>
            </a>
    `
}



export function crearElementosSociales() {
    redesSociales.forEach(social => {
        const card = cardSocial(social);
        let elemeto = document.createElement('div');
        elemeto.classList.add('card-social')
        elemeto.setAttribute('id', 'card-social');
        elemeto.innerHTML = card;
        sectorRedes.appendChild(elemeto);
    
    });
}