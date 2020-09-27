'use strict';

var size = ['small', 'medium', 'large'];
let branches = [];



function Branch(setting, name, location, image, size, isDjincluded, catring) {

  this.setting = setting;
  this.name = name;
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
    new Branch('indoor', 'adonees','Az zarqa/Army st.', 'images/adonees.png' , size[i], 'with DJ', 'with catring service');
    new Branch('outdoor', 'Banafsaj', 'Tlaa Al Ali - Amman' ,'images/anafsaj.jpg' , size[i], 'without DJ', 'with catring service');
    new Branch('outdoor', 'Country Club','Action Target, Queen Alia Airport Road' , 'images/Country Club.jpg' , size[i], 'without DJ', 'without catring service');
    new Branch('outdoor', 'dunes club','Close to Gamadan, Queen Alia Airport Road' ,'images/dunes club.jpg' , size[i], 'without DJ', 'without catring service');
    new Branch('indoor', 'fairmont', ' 5th Circle, Amman','images/fairmont.jpg' , size[i], 'with DJ', 'with catring service');
    new Branch('outdoor', 'fourseasons', ' Kindi St, Amman','images/fourseasons.jpg' , size[i], 'without DJ', 'without catring service');
    new Branch('indoor', 'Numan', 'Wasfi At-Tall St., Amman','images/Numan.jpg' , size[i], 'without DJ', 'with catring service');
    new Branch('indoor', 'rotana', 'Black Iris Street, Amman', 'images/rotana.jpg' , size[i], 'with DJ', 'without catring service');
    new Branch('outdoor', 'W amman','Rafiq Al Hariri Ave, Amman','images/W amman.jpg' , size[i], 'with DJ', 'with catring service');
    new Branch('indoor', 'white halls','Queen Alia Airport Road','images/white halls.jpg' , size[i], 'with DJ', 'without catring service');
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

