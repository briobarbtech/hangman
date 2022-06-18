const sectorRedes = document.getElementById('social-me');

const cardSocial = (prop) => {
    return `<a href=${prop.link}>
                ${prop.icon}
                <p class="name-social" id="name-social">${prop.name}</p>
            </a>
    `
}

const redesSociales = [
    {
        icon: '<i class="fa-brands fa-github"></i>',
        name: 'GitHub',
        link: '#'
    },
    {
        icon: '<i class="fa-brands fa-instagram"></i>',
        name: 'Instagram',
        link: '#'
    },
    {
        icon: '<i class="fa-brands fa-linkedin"></i>',
        name: 'LinkedIn',
        link: '#'
    },
    {
        icon: '<i class="fa-solid fa-at"></i>',
        name: 'Email',
        link: '#'
    }
];

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