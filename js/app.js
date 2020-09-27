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
    new Branch('indoor', 'adonees', , size[i], 'with DJ', 'with catring service');
    new Branch('outdoor', 'Banafsaj', size[i], 'without DJ', 'with catring service');
    new Branch('outdoor', 'Country Club', size[i], 'without DJ', 'without catring service');
    new Branch('outdoor', 'dunes club', size[i], 'without DJ', 'without catring service');
    new Branch('indoor', 'fairmont', size[i], 'with DJ', 'with catring service');
    new Branch('outdoor', 'fourseasons', size[i], 'without DJ', 'without catring service');
    new Branch('indoor', 'Numan', size[i], 'without DJ', 'with catring service');
    new Branch('indoor', 'rotana', size[i], 'with DJ', 'without catring service');
    new Branch('outdoor', 'W amman', size[i], 'with DJ', 'with catring service');
    new Branch('indoor', 'white halls', size[i], 'with DJ', 'without catring service');
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

