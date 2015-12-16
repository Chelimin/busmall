//Object literals * 14?!?!
// widget1 = {
//   name:'Banana',
//   path: 'BMimgs/banana.jpg',
//   tally: 0,
//   views: 0,
//   prctClick: function(){
//     //return % of clicks vs views.
//   },
// }

//Constructor:

var allProducts = [];
var productNames = ['boots', 'chair', 'scissors', 'water_can', 'wine_glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen','shark', 'sweep','unicorn','usb'];

  function Product(name,path){
    this.name = name;
    this.path = path;
    this.tally = 0;
    this.views = 0;
    allProducts.push(this);
  }

var boots = new Product("boots","BMimgs/boots.jpg");
var chair = new Product("chair","BMimgs/chair.jpg");
var scissors = new Product("scissors","BMimgs/scissors.jpg");
var water_can = new Product("water_can","BMimgs/water_can.jpg");
var wine_glass = new Product("wine_glass","BMimgs/wine_glass.jpg");
var bag = new Product("boots","BMimgs/bag.jpg");
var banana = new Product("boots","BMimgs/banana.jpg");
var cthulhu = new Product("boots","BMimgs/cthulhu.jpg");
var dragon = new Product("boots","BMimgs/dragon.jpg");
var pen = new Product("boots","BMimgs/pen.jpg");
var shark = new Product("boots","BMimgs/shark.jpg");
var sweep = new Product("boots","BMimgs/sweep.png");
var unicorn = new Product("boots","BMimgs/unicorn.jpg");
var usb = new Product("boots","BMimgs/usb.gif");

// function buildAlbum(){
//   for (var i=0; i < allProducts.length; i++){
//     new Product(productNames[i], 'BMimgs/' + productNames[i] + '.jpg');
//   }
// }
// buildAlbum();

var productRank = {

//obj to store multiple properties
  leftObj: null,
  midObj: null,
  rightObj: null,
  totalClicks: 0,
  barchart: null,

//Element can only get HTML variables
  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),
  resultsEl: document.getElementById('results'),
  //ctx:document.getElementById('myChart').getContext('2d');

  getRandomIndex: function(){
    return Math.floor(Math.random() * productNames.length);
  },

  displayImages: function() {
      productRank.leftObj = allProducts[productRank.getRandomIndex()];
      console.log(productRank.leftObj);
      productRank.midObj = allProducts[productRank.getRandomIndex()];
      productRank.rightObj = allProducts[productRank.getRandomIndex()];

      if (productRank.leftObj === productRank.midObj || productRank.leftObj === productRank.rightObj || productRank.midObj === productRank.rightObj){
      productRank.displayImages();
      }

      productRank.leftEl.src = productRank.leftObj.path;
      productRank.leftEl.id = productRank.leftObj.name;

      productRank.midEl.src = productRank.midObj.path;
      productRank.midEl.id = productRank.midObj.name;

      productRank.rightEl.src = productRank.rightObj.path;
      productRank.rightEl.id = productRank.rightObj.name;

},

  showResults: function(){
  if (productRank.totalClicks % 15 === 0){
    productRank.resultsEl.hidden = false;
    // this.resultsButton.addEventListner('click',function(){
    //   productRank.resultsButton.hidden=true;
    //   productRank.barChart = new Chart(productRank.ctx).Bar(data);
    // });
  } else {
    productRank.resultsEl.hidden = true;
  }



}

    // arrange: function(){
    //   var tallycount = [];
    //
    //   for(var i=0; i < allProducts.length; i++){
    //     tallycount.push(allProducts[i].tally);
    //     console.log(tallycount);
    //   }
    //
    //   function compare(a, b) {
    //       if (a is less than b by some ordering criterion) {
    //         return -1;
    //           }
    //       if (a is greater than b by the ordering criterion) {
    //         return 1;
    //           }
    //           // a must be equal to b
    //           return 0;
    //           }
    //
    //   tallycount.sort(compare);
    //

};

    productRank.leftEl.addEventListener('click', function(){
    productRank.leftObj.tally +=1;
    productRank.totalClicks +=1;
    console.log("This is the new number: " + productRank.leftObj.tally);
    productRank.showResults();
    productRank.displayImages();
  })

    productRank.midEl.addEventListener('click', function(){
    productRank.midObj.tally +=1;
    productRank.totalClicks +=1;
    console.log("This is the new number: " + productRank.midObj.tally);
    productRank.showResults();
    productRank.displayImages();
  })

    productRank.rightEl.addEventListener('click', function(){
    productRank.rightObj.tally +=1;
    productRank.totalClicks +=1;
    console.log("This is the new number: " + productRank.rightObj.tally);
    productRank.showResults();
    productRank.displayImages();
  })

    var resultList = document.getElementById("list");
    var logResults = function(){
      for (var i=0; i < allProducts.length; i++){
        var li = document.createElement("li");
        li.textContent = "Total number of clicks for " + allProducts[i].name + " is: "+ allProducts[i].tally;
        resultList.appendChild(li);
        }
      }

      var displayResults = document.getElementById('results');
      displayResults.addEventListener('click', logResults);

productRank.displayImages()
