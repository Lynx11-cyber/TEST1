// Add to cart script
function addToCart(id, name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({id, name, price, image});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

// Render the cart when the page loads
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    const totalDiv = document.getElementById('total');
    const checkoutButton = document.getElementById('checkoutButton');
    cartDiv.innerHTML = '';
    totalDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div>
                ${item.name} - ₱${item.price}
                <br>
                <a href="../HTMLS/productsingle.html?item=${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                </a>
                <br>
                <button class="button" onclick="removeFromCart(${index}, this)">Remove</button>
            </div>`;
        cartDiv.appendChild(itemDiv);
        total += item.price;
    });

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        totalDiv.innerHTML = `<p>Total: <span style="font-size: 180%; font-weight: 900;">₱${total}</span></p>`;
    }
}

// Remove item from cart
function removeFromCart(index, button) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);