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