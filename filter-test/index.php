<?php require_once 'functions.php'; ?>
<?php $products = getProductCollection(); ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script>
	   var productsList = <?php echo json_encode(getProductCollection()); ?>;
    </script>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="main.js"></script>
    <title>Lori's Filter Test</title>
  </head>
  <body>
      <div class='filter-container'>
          <div id='category-filters'>
              <h3>Category</h3>
              <input type="checkbox" id="shirts" value="shirts" /> Shirts<br />
              <input type="checkbox" id="pants" value="pants" /> Pants<br />
              <input type="checkbox" id="headwear" value="headwear" /> Headwear<br />
          </div>
          <div id='color-filters'>
              <h3>Color</h3>
              <input type="checkbox" id="white" value="white" /> White<br />
              <input type="checkbox" id="black" value="black" /> Black<br />
              <input type="checkbox" id="blue" value="blue" /> Blue<br />
              <input type="checkbox" id="yellow" value="yellow" /> Yellow<br />
              <input type="checkbox" id="green" value="green" /> Green<br />
              <input type="checkbox" id="gray" value="gray" /> Gray<br />
          </div>
      </div>
      <div id='main'>

      </div>
  </body>
</html>
