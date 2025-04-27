let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} aggiunto al carrello. Totale: €${getCartTotal()}`);
}

function getCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}
