
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

    var filteredProducts = productsList.slice();

    var filteredCategoryProducts = filteredProducts.filter( obj => allValues.indexOf(obj.category)!== -1 );
    var filteredColorProducts = filteredProducts.filter( obj => allValues.indexOf(obj.color)!== -1 );

    // debugger
    if(filteredCategoryProducts.length){
        filteredProducts = filteredCategoryProducts;
    }

    if(filteredColorProducts.length && !filteredCategoryProducts.length){
        filteredProducts = filteredColorProducts;
    }

    if(filteredColorProducts.length && filteredCategoryProducts.length){
        var filteredCategoryThenColor = filteredCategoryProducts.filter( obj => allValues.indexOf(obj.color)!== -1 );
        if(filteredCategoryThenColor.length === 0){
            $('#main').empty()
            $('#main').text('Sorry, there are no products that match your search.');
            return;
        }
        filteredProducts = filteredCategoryThenColor;
    }

    displayFilteredProducts(filteredProducts);

}
