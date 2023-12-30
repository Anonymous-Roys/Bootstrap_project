const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    // Add more products as needed
];

document.addEventListener('DOMContentLoaded', displayProducts);

function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card">
                <img src="./images/iphone.jpg" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Implement your add to cart logic here
    alert(`Product ${productId} added to cart!`);
}
