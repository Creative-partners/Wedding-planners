'use strict';

var size = ['small', 'medium', 'large'];
let branches = [];

// object to store locations
function Branch(setting, name, location, image, size, isDjIncluded, catering, price) {

  this.setting = setting;
  this.name = name;
  this.id = name.split(' ').slice(0, -1).toString();
  this.location = location;
  this.image = image;
  this.setting = setting;
  this.size = size;
  this.isDjIncluded = isDjIncluded;
  this.catering = catering;
  this.price = price;
  branches.push(this);

}

/* // image paths
../img/adonees.png
../img/banafsaj.jpg
../img/country-club.jpg
../img/dunes-club.jpg
../img/dunes-club2.jpg
../img/fairmont.jpg
../img/fairmont2.jpg
../img/fourseason.jpg
../img/fourseason2.jpg
../img/numan.jpg
../img/rotana.jpg
../img/rotana2.jpg
../img/w-amman.jpg
../img/white-halls.jpg
*/

// //tests
// new Branch('indoor', 'Adonees Hall', 'Az zarqa/Army st.', '../img/adonees.png', 'small', 'yes', 'yes', '30');
// new Branch('indoor', 'Banafsaj Hall', 'Tlaa Al Ali - Amman', '../img/banafsaj.jpg' , 'medium', 'no', 'yes', '30');
// new Branch('outdoor', 'Country Club', 'Action Target, Queen Alia Airport Road', '../img/country-club.jpg', 'small', 'no', 'no', '45');
// new Branch('outdoor', 'Dunes Club', 'Close to Gamadan, Queen Alia Airport Road', '../img/dunes-club.jpg', 'small', 'no', 'no', '50');
// new Branch('indoor', 'Fairmont Hotel', ' 5th Circle, Amman', '../img/fairmont.jpg', 'medium', 'yes', 'yes', '60');
// new Branch('outdoor', 'Four Seasons', ' Kindi St, Amman', '../img/fourseasons.jpg', 'medium', 'yes', 'yes', '55');
// new Branch('indoor', 'Numan Hall', 'Wasfi At-Tall St., Amman', '../img/numan.jpg', 'large', 'no', 'yes', '40');
// new Branch('indoor', 'Rotana Hotel', 'Black Iris Street, Amman', '../img/rotana.jpg', 'medium', 'yes', 'no', '60');
// new Branch('outdoor', 'W Amman', 'Rafiq Al Hariri Ave, Amman', '../img/w-amman.jpg', 'medium', 'yes', 'yes', '50');
// new Branch('outdoor', 'white Halls', 'Queen Alia Airport Road', '../img/white-halls.jpg', 'large', 'yes', 'no', '55');


Branch.prototype.render = function () {
// entering new locations
  for (let i = 0; i < size.length; i++) {
    new Branch('indoor', 'Adonees Hall', 'Az zarqa/Army st.', 'img/adonees.png', size[i], 'yes', 'yes', '30');
    new Branch('outdoor', 'Banafsaj Hall', 'Tlaa Al Ali - Amman', 'img/anafsaj.jpg', size[i], 'no', 'yes', '30');
    new Branch('outdoor', 'Country Club', 'Action Target, Queen Alia Airport Road', 'img/Country Club.jpg', size[i], 'no', 'no', '45');
    new Branch('outdoor', 'Dunes Club', 'Close to Gamadan, Queen Alia Airport Road', 'img/dunes club.jpg', size[i], 'no', 'no', '50');
    new Branch('indoor', 'Fairmont Hotel', ' 5th Circle, Amman', 'img/fairmont.jpg', size[i], 'yes', 'yes', '60');
    new Branch('outdoor', 'Four Seasons', ' Kindi St, Amman', 'img/fourseasons.jpg', size[i], 'no', 'no', '55');
    new Branch('indoor', 'Numan Hall', 'Wasfi At-Tall St., Amman', 'img/Numan.jpg', size[i], 'no', 'yes', '40');
    new Branch('indoor', 'Rotana Hotel', 'Black Iris Street, Amman', 'img/rotana.jpg', size[i], 'yes', 'no', '60');
    new Branch('outdoor', 'W Amman', 'Rafiq Al Hariri Ave, Amman', 'img/W amman.jpg', size[i], 'yes', 'yes', '50');
    new Branch('indoor', 'white Halls', 'Queen Alia Airport Road', 'img/white halls.jpg', size[i], 'yes', 'no', '55');
  }

  // allow different size options for venues
  let group;
  if (this.setting === 'indoor' && this.size === size[2]) {
    group = 'A';
  }
  if (this.setting === 'indoor' && this.size === (size[0] || size[1])) {
    group = 'B';
  }
  if (this.setting === 'outdoor' && this.size === size[2]) {
    group = 'C';
  }
  if (this.setting === 'outdoor' && this.size === (size[0] || size[1])) {
    group = 'D';
  }

};

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check');

  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

var bName;
var lName;
var gName;
var glName;
var wDate;
var chosenSize;
var dj;
var catering;
var userSetting;

// event listener to determine form inputs
let form1 = document.getElementsById('user-form');
form1.addEventListener('submit', function (event) {
  event.preventDefault();

  bName = event.target.bName.value;
  lName = event.target.lName.value;
  gName = event.target.gName.value;
  glName = event.target.glName.value;
  wDate = event.target.date.value;
  var size = [document.getElementById('size0'), document.getElementById('size1'), document.getElementById('size2')];
  if (size[0].checked === true) {
    chosenSize = event.target.size0.value;
  } else if (size[1].checked === true) {
    chosenSize = event.target.size1.value;
  }
  else {
    chosenSize = event.target.size2.value;
  }
  var djIndex = [document.getElementById('dj1'), document.getElementById('dj2')];

  if (djIndex[0].checked) {
    dj = event.target.dj1.value;
  }

  if (djIndex[1].checked) {
    dj = event.target.dj2.value;
  }

  var caIndex = [document.getElementById('ca1'), document.getElementById('ca2')];

  if (caIndex[0].checked) {
    catering = event.target.ca1.value;
  }

  if (caIndex[1].checked) {
    catering = event.target.ca2.value;
  }

  var doorIndex = [document.getElementById('in'), document.getElementById('out')];

  if (doorIndex[0].checked) {
    door = event.target.in.value;
  }

  if (doorIndex[1].checked) {
    door = event.target.out.value;
  }

  console.log('in', bName, lName, gName, glName, wDate, chosenSize, dj, catering,door);
});
console.log('out', bName, lName, gName, glName, wDate, chosenSize, dj, catering,door);


// // test data
// var bName = 'Bride';
// var lName = 'B-Family';
// var gName = 'Groom';
// var glName = 'G-Family';
// var wDate = '27/9/2020';
// var chosenSize = 'medium';
// var dj = 'yes';
// var catering = 'yes';
// var userSetting = 'outdoor';


// rendering suitable options after form is filler
const resultSection = document.getElementById('results');
function renderResults() {
  for (let i = 0; i < options.length; i++) {
    let articleEl = document.createElement('article');
    resultSection.appendChild(articleEl);
    let unorderedList = document.createElement('ul');
    articleEl.appendChild(unorderedList);
    let nameItem = document.createElement('li');
    unorderedList.appendChild(nameItem);
    nameItem.textContent = 'Name of location:' + options[i].name;
    let addressItem = document.createElement('li');
    unorderedList.appendChild(addressItem);
    addressItem.textContent = 'Address: ' + options[i].location;
    let settingItem = document.createElement('li');
    unorderedList.appendChild(settingItem);
    settingItem.textContent = 'Works best for: ' + options[i].setting + ' events.';
    let sizeItem = document.createElement('li');
    unorderedList.appendChild(sizeItem);
    sizeItem.textContent = 'Fits a ' + options[i].size + ' group.';
    let djItem = document.createElement('li');
    unorderedList.appendChild(djItem);
    djItem.textContent = 'DJ included in price: ' + options[i].dj;
    let cateringItem = document.createElement('li');
    unorderedList.appendChild(cateringItem);
    cateringItem.textContent = 'Catering included in price: ' + options[i].catering;
    let priceItem = document.createElement('li');
    unorderedList.appendChild(priceItem);
    priceItem.textContent = 'Starting price (per person): ' + options[i].price + ' JDs';
    let imageEl = document.createElement('img');
    articleEl.appendChild(imageEl);
    imageEl.setAttribute('src', options[i].path);
    imageEl.setAttribute('title', options[i].name);
    let buttonEl = document.createElement('button');
    articleEl.appendChild(buttonEl);
    buttonEl.setAttribute('id', options[i].id);
    buttonEl.setAttribute('class', 'button');
    buttonEl.textContent = 'Select Venue';
  }
}

// function to filter branches based on user input and store into an array of objects
let options = [];
function filter(settingInput, sizeInput, djInput, cateringInput) {
  for (let i = 0; i < branches.length; i++) {
    if (branches[i].setting === settingInput) {
      if (branches[i].size === sizeInput) {
        if (branches[i].isDjIncluded === djInput) {
          if (branches[i].catering === cateringInput) {
            options.push(branches[i]);
          }
        }
      }
    }
  }
  renderResults();
}
filter(userSetting, chosenSize, dj, catering);
console.log('result of filter ' + options);


