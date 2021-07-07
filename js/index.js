// Your code goes here


//Crearted a mouseOver event listener for the navigation 
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


    // //  //Created a Keydown
    //  const headerNo = document.querySelector('header');
    //  headerNo.addEventListener("keydown", () => header.style.opacity = "0");

        
    


     //drag/drop event
    //  dragged the Let's go section 
    textCon = document.querySelector('.text-content');
    //console.log(textCon);
     textCon.addEventListener('drag', function(event){

    }, false);

    textCon.addEventListener('dragstart', function(event){
        //storing the draggged element
        textCon = event.target;
        event.target.style.border = '1px solid black';
        event.target.style.color = 'red';
        event.stopPropagation();
    }, false);

    textCon.addEventListener('dragend', function(event){
        // reset transpanrency
        event.target.style.border = '';

    }, false);
    //drop event
    textCon.addEventListener('dragover', function(){
        event.preventDefault();

    }, false);

    textCon.addEventListener('dragleave', function(event){
        if(event.target.className == 'dropzone'){
            event.target.style.color = '';
        }
    }, false);

    textCon.addEventListener('drop', function(event){
        event.preventDefault();
        //move the dragged element to the selected drop
        if(event.target.className == 'dropZone'){
            event.target.style.color = '';
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }, false);
    



//added an alert to user  
const body = document.querySelector('body');
body.addEventListener('wheel', function alertMeOnce(){
    alert("Hello My name is Vanessa the Wheel");
    body.removeEventListener('wheel', alertMeOnce);
  });

//happens when first btton at bottom is clicked 
const btn = document.querySelector('.destination');
btn.addEventListener('click', (event) =>{
    console.log('button has been clicked');
})

// resized picture "img/fun.jpg"
const imgFluidRounded = document.querySelector('.intro > img');
imgFluidRounded.addEventListener('drag', (event) => event.target.style.transform = 'scale(3.5)');