number_format(floatval('23.423,75'), 2, '.', ',')
function calcAmount(price, discount, total) {
    let priceValue = parseFloat(price.value);
    let discountValue = parseFloat(discount.value);

    if (isNaN(priceValue) || isNaN(discountValue) || priceValue < 0 || discountValue < 0) {
        let errorMessage = "Por favor, ingrese números válidos";
        let errorDiv = document.createElement("div");
        errorDiv.className = "mt-2 text-sm text-red-600 space-y-1";
        errorDiv.textContent = errorMessage;
        
        // Obtener el elemento padre del input total_amount
        let parentElement = total.parentElement;
        
        // Insertar el div de error después del input total_amount
        parentElement.insertBefore(errorDiv, total.nextSibling);
        
        return;
    }
    
    // Si no hay error, eliminar cualquier mensaje de error existente
    let errorDiv = total.nextElementSibling;
    if (errorDiv && errorDiv.className.includes("text-red-600")) {
        errorDiv.remove();
    }

    if (priceValue !== 0 && discountValue !== 0 && discountValue !== '') {
        let discountAmount = (priceValue * discountValue) / 100;
        total.value = (priceValue - discountAmount).toFixed(2);
    } else {
        total.value = priceValue.toFixed(2);
    }
}

let price = document.getElementById('price');
let discount = document.getElementById('discount');
let total = document.getElementById('total_amount');

price.addEventListener("input", () => {
    calcAmount(price, discount, total);
});

discount.addEventListener("input", () => {
    calcAmount(price, discount, total);
});
