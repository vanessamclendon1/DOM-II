// Your code goes here


//Crearted a mouseOver event listener 

 const overNav = document.querySelector('nav');
 console.log(overNav);
 overNav.addEventListener('mouseover',function(event){
     //hightlighted mouseenter target
     event.target.style.color ='#f44e42';
     event.target.style.fontSize = '3rem';
     event.target.style.border = '1px solid green';
     event.target.style.background = 'gray';

     //reset the color after a short delay
     setTimeout(function(){
         event.target.style.color = 'blue';
         event.target.style.background = '';
         event.target.style.border = '';
     }, 500);
     }, false);

