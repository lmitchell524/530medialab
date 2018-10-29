
(function(){
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
    function buildProduct(productToBuild){
        var newProduct = $('<div>').addClass('product-container').attr('id', productToBuild.id).attr('data-category', productToBuild.category);
        var name = $('<p>').text(productToBuild.name).addClass('name');
        var category = $('<p>').text('Category: ' + productToBuild.category);
        var color = $('<p>').text('Color: ' + productToBuild.color);
        var price = $('<p>').text('Price: $' + productToBuild.price);

        $('#main').append(newProduct);
        (newProduct).append(name, category,color, price);
    }

    function getAllCheckedVals(){
        //check to make sure you don't get an error if a category matches a color
        var checkedCategoryElements = $('#category-filters > input:checked');
        var categoryValues = [];

        for(var i = 0; i < checkedCategoryElements.length; i++){
            categoryValues.push( checkedCategoryElements[i].value);
        }

        var checkedColorElements = $('#color-filters > input:checked');
        var colorValues = [];

        for(var i = 0; i < checkedColorElements.length; i++){
            colorValues.push( checkedColorElements[i].value);
        }

        var filteredProducts = productsList.slice();

        if(categoryValues.length){
            filteredProducts = filteredProducts.filter( obj => categoryValues.indexOf(obj.category)!== -1 );
        }

        if(colorValues.length){
            filteredProducts = filteredProducts.filter( obj => colorValues.indexOf(obj.color)!== -1 );
        }

        $('#main').empty()
        if(filteredProducts.length === 0){
            $('#main').text('Sorry, there are no products that match your search.');
            return;
        }

        displayFilteredProducts(filteredProducts);
    }
})();
