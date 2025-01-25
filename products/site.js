const products = [
    {id: 1, name: "White Boba Pearls", price: 189, image: "boba-pearls.svg" },
    {id: 2,name: "Brown Sugar", price: 79, image: "brown-sugar.svg" },
    {id: 3, name: "Boba Straws", price: 109, image: "boba-straws.svg" },
    {id: 4,name: "Green Tea Bags", price: 49, image: "green-tea.svg" },
    {id: 5,name: "Black Tea Bags", price: 49, image: "black-tea.svg" }    
];

const cart = [];
const productContainer = document.getElementById("product-container");

products.forEach(product => {
    const productCard = document.createElement("div");

    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-price">${product.price} SEK</p>
        <button id="add-button" class="buy-button"  onclick="addToCart(${product.id})">BUY</button>
    `;
    productContainer.appendChild(productCard);
    updateCart();
});

function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalContainer = document.getElementById("cart-total");

    cartContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        totalContainer.textContent = "Total: 0.00 SEK";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `            
            <span>${item.name}</span>
            <div class="price-div">
            <span>${(item.price * item.quantity).toFixed(2)} SEK</span>
            </div>
            <div>
            <button class="cart-button" onclick="removeFromCart(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button class="cart-button" onclick="addToCart(${item.id})">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalContainer.textContent = `Total: ${total.toFixed(2)} SEK`;
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}


function removeFromCart(productId) {
    const cartIndex = cart.findIndex(item => item.id === productId);

    if (cartIndex > -1) {
        if (cart[cartIndex].quantity > 1) {
            cart[cartIndex].quantity--;
        } else {
            cart.splice(cartIndex, 1);
        }
    }

    updateCart();
}

const checkOutButton = document.getElementById("checkout-button");
const totalContainer = document.getElementById("cart-total");

function checkOut () {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    cart.length=0;
    cartContainer.innerHTML = "<p>Thank you for your purchase!</p>";
    total = 0;
    totalContainer.textContent = `Total: ${total.toFixed(2)} SEK`;
};



checkOutButton.addEventListener("click", () => {
    if (cart.length != 0) {
        checkOut();        
    }
});