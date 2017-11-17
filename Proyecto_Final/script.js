
   
var abierto = true; 

$(".menuIcon").click(function(){
     if(abierto){
         
      $('nav').animate({
               left: '1000px'});
             //   abierto = false;
         
    } else{
     //   abierto = true;
           $('nav').animate({
            right: '1000px'});
            
        
            
    }
   
           
});