function calculatePallets() {
    var totalUnits = document.getElementById("totalUnits").value;
    var unitsPerPallet = document.getElementById("unitsPerPallet").value;

    // Perform the calculations
    var fullPallets = Math.floor(totalUnits / unitsPerPallet);
    var partialPalletUnits = totalUnits % unitsPerPallet;

    // Display the results
    var resultDiv = document.getElementById("result1a");
    resultDiv.innerHTML = `<h3>${fullPallets}</h3>`;

    // Display the results
    var resultDiv = document.getElementById("result2a");
    resultDiv.innerHTML = `<h3>${partialPalletUnits}</h3>`;
}