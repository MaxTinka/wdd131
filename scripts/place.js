// JavaScript to display the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// JavaScript to populate the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModified;

// Static values for temperature and wind speed
const temperatureF = 30; // Temperature in Fahrenheit
const windSpeedMph = 10; // Wind speed in miles per hour

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
}

// Check conditions for viable wind chill calculations
let windChill;
if ((temperatureF <= 50 && windSpeedMph > 3)) {
    windChill = calculateWindChill(temperatureF, windSpeedMph);
} else {
    windChill = "N/A"; // Not applicable if conditions are not met
}

// Display the wind chill factor in the Weather section
document.getElementById("windChill").textContent = `Wind Chill: ${windChill}°F`;