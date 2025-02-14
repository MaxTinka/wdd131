// Sample menu items with images
const menuItems = [
    { name: "Margherita Pizza", price: 35000, image: "images/pizza2.jpg" },
    { name: "Burgers", price: 21000, image: "images/bigburger.jpg" },
    { name: "Chicken Nuggets", price: 15000, image: "images/nuggets2.jpg" },
    { name: "Chocolate Cake", price: 8000, image: "images/cake2.jpg" },
    { name: "Vanilla Ice Cream", price: 10000, image: "images/icecream2.jpg" },
    { name: "Fried Chicken", price: 18000, image: "images/chicken2.jpg" },
    { name: "Tomato Soup", price: 15000, image: "images/soup1.jpg" },
    { name: "Coffee", price: 10000, image: "images/coffee2.jpg" },
];

// Function to load menu items into the DOM
function loadMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = ''; // Clear existing items

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
          <div>
                <strong>${item.name}</strong> - UGX ${item.price.toLocaleString()}
            </div>
        `;
        menuList.appendChild(listItem);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const contactInfo = { name, email, message };
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo)); // Save to localStorage
    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById('contactForm').reset(); // Reset form fields
}

// Automatically load the menu when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last updated date in footer
    const lastUpdated = new Date(document.lastModified).toLocaleDateString();
    document.getElementById("lastUpdated").textContent = lastUpdated;
});