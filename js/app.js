'use strict';

var size = ['small', 'medium', 'large'];
let branches = [];



function Branch(setting, location, image, size, isDjincluded, catring) {

  this.setting = setting;
  this.location = location;
  this.image = image;
  this.setting = setting;
  this.size = size;
  this.isDjincluded = isDjincluded;
  this.catring = catring;
  branches.push(this);

}

Branch.prototype.render = function () {
  for (let i = 0; i < size.length; i++) {
    new Branch('indoor', 'adonees', 'img/adonees.png' , size[i], 'with DJ', 'with catring service');
    new Branch('outdoor', 'Banafsaj', 'img/Banafsaj.jpg', size[i], 'without DJ', 'with catring service');
    new Branch('outdoor', 'Country Club','img/Country Club.jpg' , size[i], 'without DJ', 'without catring service');
    new Branch('outdoor', 'dunes club', 'img/dunes club.jpg' ,size[i], 'without DJ', 'without catring service');
    new Branch('indoor', 'fairmont', 'img/fairmont.jpg' ,size[i], 'with DJ', 'with catring service');
    new Branch('outdoor', 'fourseasons', 'img/fourseasons.jpg' ,size[i], 'without DJ', 'without catring service');
    new Branch('indoor', 'Numan', 'img/Numan.jpg' ,size[i], 'without DJ', 'with catring service');
    new Branch('indoor', 'rotana', 'img/rotana.jpg' ,size[i], 'with DJ', 'without catring service');
    new Branch('outdoor', 'W amman', 'img/W amman.jpg' ,size[i], 'with DJ', 'with catring service');
    new Branch('indoor', 'white halls', 'img/white halls.jpg' ,size[i], 'with DJ', 'without catring service');
  }

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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}