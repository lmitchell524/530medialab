
$(document).ready(initializeApp);

function initializeApp(){
    displayAllProducts();
    addClickHandlersToElements();
}

function addClickHandlersToElements(){
    $('input').on('click', getAllCheckedVals);
}

function displayAllProducts(){
    for(var i = 0; i < productsList.length; i++){
        var productToBuild = productsList[i];
        buildProduct(productToBuild);
    }
}

function displayFilteredProducts(filteredProductsArr){
    $('#main').empty()
    if(filteredProductsArr.length){
        for(var i = 0; i < filteredProductsArr.length; i++){
        buildProduct(filteredProductsArr[i]);
        }
    } else {
        displayAllProducts();
    }
}

//build each product with attributes
function buildProduct(productToBuild) {
    var newProduct = $('<div>').addClass('product-container').attr('id', productToBuild.id).attr('data-category', productToBuild.category);
    var name = $('<p>').text(productToBuild.name).addClass('name');
    var category = $('<p>').text('Category: ' + productToBuild.category);
    var color = $('<p>').text('Color: ' + productToBuild.color);
    var price = $('<p>').text('Price: $' + productToBuild.price);

    $('#main').append(newProduct);
    (newProduct).append(name, category,color, price);
}

function getAllCheckedVals(){
    // debugger
    var checkedElements = $('input:checked');
    var allValues = [];

    for(var i = 0; i < checkedElements.length; i++){
        allValues.push( checkedElements[i].value);
    }
    debugger
    var filteredCategoryProducts = productsList.filter( obj => allValues.indexOf(obj.category)!== -1 );
    var filteredColorProducts = productsList.filter( obj => allValues.indexOf(obj.color)!== -1 );

    var filteredProducts = productsList.slice();

    if(filteredCategoryProducts.length){
        filteredProducts = filteredProducts.filter( item => filteredCategoryProducts.indexOf(item.category)!== -1)
    }

    if(filteredColorProducts.length){
        filteredProducts = filteredProducts.filter( item => filteredColorProducts.indexOf(item.color)!== -1)
    }

    $("#main").empty();
    filteredProducts.forEach( item => displayFilteredProducts(item))


    // displayFilteredProducts(filteredCategoryProducts);
    // displayFilteredProducts(filteredColorProducts);


}
