
// JavaScript code
document.getElementById('shipping-calculator-form').addEventListener('submit', function (event) {

    event.preventDefault();
    var zipCode = document.getElementById('zip').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;

    
    // Manually set the shipping rates for specific combinations
    var shippingRates = {
        "US-NY-10001": 10.99,
        "US-CA-90001": 12.99,
        "CA-ON-M5V": 8.99,
        // Add more combinations here as needed
    };

    var key = country + '-' + state + '-' + zipCode;

    if (shippingRates.hasOwnProperty(key)) {
        var shippingCharges = shippingRates[key];

        // Display shipping charges on the page
        var chargesElement = document.getElementById('shipping-charges');
        chargesElement.innerHTML = 'Shipping Charges: ' + shippingCharges.toFixed(2);
        chargesElement.style.display = 'block';
    }
    else {
        // Shipping rate not found for the entered combination
        var chargesElement = document.getElementById('shipping-charges');
        chargesElement.innerHTML = 'Shipping rate not available for this combination.';
        chargesElement.style.display = 'block';
    }
});
