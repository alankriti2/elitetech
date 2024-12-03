document.getElementById('convert-button').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature-input').value.trim();
    const inputUnit = document.getElementById('unit-select').value;
    const outputUnit = document.getElementById('output-unit-select').value;
    const resultDiv = document.getElementById('result');

    if (!inputUnit || !outputUnit) {
        resultDiv.textContent = "Please select both input and output units.";
        resultDiv.style.color = "red";
        return;
    }

    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }

    resultDiv.style.color = "#000000"; // Reset color for valid input
    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;

    // Conversion logic based on input and output units
    if (inputUnit === outputUnit) {
        convertedTemperature = temperature; // Same unit, no conversion
    } else if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32; // Celsius to Fahrenheit
        } else if (outputUnit === "kelvin") {
            convertedTemperature = temperature + 273.15; // Celsius to Kelvin
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5 / 9; // Fahrenheit to Celsius
        } else if (outputUnit === "kelvin") {
            convertedTemperature = ((temperature - 32) * 5 / 9) + 273.15; // Fahrenheit to Kelvin
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemperature = temperature - 273.15; // Kelvin to Celsius
        } else if (outputUnit === "fahrenheit") {
            convertedTemperature = ((temperature - 273.15) * 9 / 5) + 32; // Kelvin to Fahrenheit
        }
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
});
