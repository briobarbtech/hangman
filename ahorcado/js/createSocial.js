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
        link: 'https://github.com/briobarbtech'
    },
    {
        icon: '<i class="fa-brands fa-instagram"></i>',
        name: 'Instagram',
        link: 'https://www.instagram.com/barquesi.tech/'
    },
    {
        icon: '<i class="fa-brands fa-linkedin"></i>',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/brian-barquesi'
    },
    {
        icon: '<i class="fa-solid fa-at"></i>',
        name: 'Email',
        link: 'mailto:barquesi.tech@gmail.com'
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