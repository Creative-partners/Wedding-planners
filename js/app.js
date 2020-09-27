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
    new Branch('indoor', 'adonees',  size[i], 'with DJ', 'with catring service');
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

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
  
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

form1.addEventListener('submit' , function (event){
    event.preventDefault();
 
     var bName = event.target.bName.value;
     var lName = event.target.lName.value;
     var gName = event.target.gName.value;
     var glName = event.target.glName.value;
     var wDate = event.target.date.value; 
     var size = [document.getElementById('size0'),document.getElementById('size1'),document.getElementById('size2')];
     var choosenSize ;
       if(size[0].checked == true )
       {choosenSize= event.target.size0.value; }
       else if(size[1].checked == true ){
       choosenSize= event.target.size1.value;
       }
       else{
        choosenSize= event.target.size2.value;
       }
     var djIndex = [document.getElementById("dj1"),document.getElementById("dj2")];

     if (djIndex[0].checked){
         var dj = event.target.dj1.value;
     }
     
     if (djIndex[1].checked){
        var dj = event.target.dj2.value;
    }
    
    var caIndex = [document.getElementById("ca1"),document.getElementById("ca2")];

    if (caIndex[0].checked){
        var catrering = event.target.ca1.value;
    }
    
    if (caIndex[1].checked){
       var catrering = event.target.ca2.value;
   }
   
   console.log(bName,lName,gName,glName,wDate,choosenSize,dj,catrering);
 

});

