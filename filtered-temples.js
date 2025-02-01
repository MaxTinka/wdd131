// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city/400x250/salt-lake-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, June, 30",
        area: 12000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Tucson Arizona",
        location: "Tucson, Arizona, United States",
        dedicated: "2017, December, 10",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-temple-lds-273999-wallpaper.jpg"
    }
];

// Function to generate temple cards dynamically
function generateTempleCards(filteredTemples) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing content

    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(area);

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} - ${temple.location}`;
        img.loading = "lazy"; // Native lazy loading
        img.classList.add('temple-image');

        card.appendChild(img);
        container.appendChild(card);
    });
}

// Filter functions
function filterOldTemples() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    generateTempleCards(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    generateTempleCards(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    generateTempleCards(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    generateTempleCards(smallTemples);
}

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', () => {
    generateTempleCards(temples ); // Display all temples initially

    document.getElementById('old').addEventListener('click', filterOldTemples);
    document.getElementById('new').addEventListener('click', filterNewTemples);
    document.getElementById('large').addEventListener('click', filterLargeTemples);
    document.getElementById('small').addEventListener('click', filterSmallTemples);
    document.getElementById('home').addEventListener('click', () => generateTempleCards(temples));
}); 