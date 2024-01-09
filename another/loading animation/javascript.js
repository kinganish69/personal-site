// Open and close the mobile navigation menu
const toggleMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// Listen for clicks on the mobile navigation menu toggle button
const menuToggle = document.querySelector('#menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// Close the mobile navigation menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('open');
    });
});

// Add functionality to the product image slider
const productImages = document.querySelectorAll('.product .image');
productImages.forEach(image => {
    const thumbnails = image.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove the "active" class from all thumbnails
            thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
            // Add the "active" class to the clicked thumbnail
            thumbnail.classList.add('active');
            // Update the main product image with the clicked thumbnail's source
            const mainImage = image.querySelector('.main-image');
            const newSrc = thumbnail.getAttribute('src');
            mainImage.setAttribute('src', newSrc);
        });
    });
});

// Add functionality to the "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the product name and price from the DOM
        const productName = button.parentElement.querySelector('h4').textContent;
        const productPrice = button.parentElement.querySelector('.price').textContent;
        // Create a new cart item with the product name and price
        const newItem = document.createElement('li');
        newItem.innerHTML = `${productName} - <span class="cart-price">${productPrice}</span>`;
        // Add the new item to the cart
        const cartList = document.querySelector('#cart ul');
        cartList.appendChild(newItem);
        // Update the cart total
        const cartTotal = document.querySelector('#cart .total');
        const currentTotal = parseFloat(cartTotal.textContent);
        const productPriceFloat = parseFloat(productPrice.replace('$', ''));
        const newTotal = currentTotal + productPriceFloat;
        cartTotal.textContent = `$${newTotal.toFixed(2)}`;
    });
});
