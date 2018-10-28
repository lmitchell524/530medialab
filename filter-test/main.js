
$(document).ready(initializeApp);

function initializeApp(){
    displayAllProducts();
    addClickHandlersToElements();
}

function addClickHandlersToElements(){
    $('#shirts').on('click', handleShirtFilter);
    $('#pants').on('click', handlePantsFilter);
    $('#headwear').on('click', handleHeadwearFilter);
}

//display all products on page load
function displayAllProducts(){
    for(var i = 0; i < productsList.length; i++){
        var productToBuild = productsList[i];
        buildProduct(productToBuild);
    }
}

//build out the product with it's attributes
function buildProduct(productToBuild) {
        var newProduct = $('<div>').addClass('product-container').attr('id', productToBuild.id).attr('data-category', productToBuild.category);
        var name = $('<p>').text(productToBuild.name).addClass('name');
        var category = $('<p>').text('Category: ' + productToBuild.category);
        var color = $('<p>').text('Color: ' + productToBuild.color);
        var price = $('<p>').text('Price: $' + productToBuild.price);

        $('#main').append(newProduct);
        (newProduct).append(name, category,color, price);
}

function handleShirtFilter() {
    if(($('#shirts')[0].checked)){
        $('.product-container').hide();
        for(var i = 0; i < ($('#shirts')[0].checked); i++){
            $('.product-container[data-category=' + this.id + ']').show();
        }
    } else {
        $('.product-container').show();
    }
}

function handlePantsFilter() {
    console.log('pants clickhandler working');
}

function handleHeadwearFilter() {
    console.log('headwear clickhandler working');
}
