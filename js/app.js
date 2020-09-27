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

