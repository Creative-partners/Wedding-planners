'use strict';

const size = ['small', 'medium', 'large'];
let branches = [];
// let options = [];

// object to store locations
function Branch(setting, name, location, image, size, isDjIncluded, catering, price) {
  this.setting = setting;
  this.location = location;
  this.name = name;
  this.id = name.split(' ').slice(0, -1).toString();
  this.image = image;
  this.setting = setting;
  this.size = size;
  this.isDjIncluded = isDjIncluded;
  this.catering = catering;
  this.price = price;
  branches.push(this);
}

for (let i = 0; i < size.length; i++) {
  new Branch('indoor', 'Adonees Hall', 'Az zarqa/Army st.', '../img/adonees.png', size[i], 'yes', 'no', '30');
  new Branch('indoor', 'Banafsaj Hall', 'Tlaa Al Ali - Amman', '../img/banafsaj.jpg', size[i], 'no', 'no', '30');
  new Branch('indoor', 'Numan Hall', 'Wasfi At-Tall St., Amman', '../img/numan.jpg', size[i], 'no', 'yes', '40');
  new Branch('indoor', 'Rotana Hotel', 'Black Iris Street, Amman', '../img/rotana.jpg', size[i], 'yes', 'yes', '60');
  new Branch('indoor', 'W Amman', 'Rafiq Al Hariri Ave, Amman', '../img/w-amman.jpg', size[i], 'yes', 'yes', '50');
  new Branch('outdoor', 'White Halls', 'Queen Alia Airport Road', '../img/white-halls.jpg', size[i], 'yes', 'no', '55');
  new Branch('outdoor', 'Country Club', 'Action Target, Queen Alia Airport Road', '../img/country-club.jpg', size[i], 'no', 'no', '45');
  new Branch('outdoor', 'Dunes Club', 'Close to Gamadan, Queen Alia Airport Road', '../img/dunes-club.jpg', size[i], 'no', 'yes', '50');
  new Branch('outdoor', 'Fairmont Hotel', '5th Circle, Amman', '../img/fairmont.jpg', size[i], 'yes', 'yes', '60');
  new Branch('outdoor', 'Four Seasons', 'Kindi St, Amman', '../img/fourseason.jpg', size[i], 'yes', 'yes', '55');
}

let bName;
let lName;
let gName;
let glName;
let wDate;
let chosenSize;
let dj;
let catering;
let door;

// event listener to determine form inputs
const form1 = document.getElementById('user-form');
form1.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();

  bName = event.target.bName.value;
  lName = event.target.lName.value;
  gName = event.target.gName.value;
  glName = event.target.glName.value;
  wDate = event.target.date.value;

  chosenSize = document.getElementById('size').value;
  const djIndex = [document.getElementById('dj1'), document.getElementById('dj2')];
  if (djIndex[0].checked) {
    dj = event.target.dj1.value;
  }
  if (djIndex[1].checked) {
    dj = event.target.dj2.value;
  }

  const caIndex = [document.getElementById('ca1'), document.getElementById('ca2')];
  if (caIndex[0].checked) {
    catering = event.target.ca1.value;
  }
  if (caIndex[1].checked) {
    catering = event.target.ca2.value;
  }

  const doorIndex = [document.getElementById('in'), document.getElementById('out')];
  if (doorIndex[0].checked) {
    door = event.target.in.value;
  }
  if (doorIndex[1].checked) {
    door = event.target.out.value;
  }
  
  // console.log('in', bName, lName, gName, glName, wDate, chosenSize, dj, catering, door);
  filter(door, chosenSize, dj, catering);
  document.getElementById('user-form').removeEventListener('submit', formHandler);
  document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();
  });
}

let options = [];
// rendering suitable options after form is filler
const resultSection = document.getElementById('results');
function renderResults() {
  for (let i = 0; i < options.length; i++) {
    const articleEl = document.createElement('article');
    resultSection.appendChild(articleEl);
    const imageEl = document.createElement('img');
    articleEl.appendChild(imageEl);
    imageEl.setAttribute('src', options[i].image);
    imageEl.setAttribute('title', options[i].name);
    imageEl.setAttribute('class', 'option-img');
    const unorderedList = document.createElement('ul');
    articleEl.appendChild(unorderedList);
    const nameItem = document.createElement('li');
    unorderedList.appendChild(nameItem);
    nameItem.textContent = options[i].name;
    const addressItem = document.createElement('li');
    unorderedList.appendChild(addressItem);
    addressItem.textContent = 'Address: ' + options[i].location;
    const priceItem = document.createElement('li');
    unorderedList.appendChild(priceItem);
    priceItem.textContent = 'Starting price (per person): ' + options[i].price + ' JDs';
    const buttonItem = document.createElement('li');
    unorderedList.appendChild(buttonItem);
    const buttonEl = document.createElement('button');
    buttonItem.appendChild(buttonEl);
    buttonEl.setAttribute('id', options[i].id);
    buttonEl.setAttribute('class', 'button');
    buttonEl.textContent = 'Select Venue';
  }
}
// function to filter branches based on user input and store into an array of objects
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
  console.log('result of filter ' + options);
}

