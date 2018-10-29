
$(document).ready(initializeApp);

function initializeApp(){
    // displayAllProducts();
    addClickHandlersToElements();
}

function addClickHandlersToElements(){
    $("input").on('click', getAllCheckedVals);
}

function displayFilteredProducts(filteredProductsArr){
  for(var i = 0; i < productsList.length; i++){
        buildProduct(filteredProductsArr[i]);
  }
}

//build out the product with it's attributes
function buildProduct(productToBuild) {
    console.log('build prodcuts being called')

    var newProduct = $('<div>').addClass('product-container').attr('id', productToBuild.id).attr('data-category', productToBuild.category);
    var name = $('<p>').text(productToBuild.name).addClass('name');
    var category = $('<p>').text('Category: ' + productToBuild.category);
    var color = $('<p>').text('Color: ' + productToBuild.color);
    var price = $('<p>').text('Price: $' + productToBuild.price);

    $('#main').append(newProduct);
    (newProduct).append(name, category,color, price);
}

function getAllCheckedVals(){
    var checkedElements = $('input:checked');
    var allValues = [];
    for(var i=0; i< checkedElements.length; i++){
    allValues.push( checkedElements[i].value);
    }
    var filteredProducts = productsList.filter( obj => allValues.indexOf(obj.category)!==-1 );
    console.log('filteredProducts ', filteredProducts)

    displayFilteredProducts(filteredProducts);
}
