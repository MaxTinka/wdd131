document.addEventListener("DOMContentLoaded", function () {
    populateProducts();
});

// New Product Array with id, name, and averagerating
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate product dropdown dynamically
function populateProducts() {
    const productSelect = document.getElementById("product");

    // Create a default "Select a Product" option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a Product ...";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    productSelect.appendChild(defaultOption);

    // Loop through products array to add each product as an option
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id; // Use id as the value for each option
        option.textContent = product.name; // Display the product name
        productSelect.appendChild(option);
    });
}
