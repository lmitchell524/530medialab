
$(document).ready(initializeApp);

function initializeApp(){
    buildProductLayout();
    // addClickHandlersToElements();
    // getDataFromServer();
}

var product = {
        id: 1,
        name: 'White T-Shirt #1',
        color: 'white',
        category: 'shirts',
        price: 12.00,
        image: 'image.png'
};

function buildProductLayout() {
    var newProduct = $('<div>');
    var name = $('<p>').text(product.name);
    var category = $('<p>').text('Category: ' + product.category);
    var color = $('<p>').text('Color: ' + product.color);
    var price = $('<p>').text('Price: $' + product.price);

    $('#main').append(newProduct);
    (newProduct).append(name, category,color, price);
}

function filterByCategory() {
    
}
