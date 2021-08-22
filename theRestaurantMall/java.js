//Pseudo Code

//1 GOAL: When user hovers on mobile menu the menu icon the menu appears

    //Grab the button with the "mobile-menu" class
    const mobileMenu = document.querySelector('.mobile-menu');
    
    //Grab the ul with class "nav-link-flex"
    const subMenu = document.querySelector('.nav-link-flex');
    
    //Grab the a element
    const navLinks = document.querySelectorAll('ul li a');
    console.log(navLinks);

    //add an event listener to listen to when user hovers over the button with the "mobile-menu" class.
    mobileMenu.addEventListener('mouseover', function(){
            //display the menu
            subMenu.classList.toggle('hidden-menu');
            console.log("Im mousing over")
    });
    //add an event listener to listen to when user hovers out of the navigation.
    subMenu.addEventListener('mouseleave', function(){
            //menu disappears
            subMenu.classList.add('hidden-menu');
            console.log("Im mouseleave");            
    });

    //add an event listener to listen to when user clinks on one of the nav links the menu disappears

    for (let i = 0; i < navLinks.length; i = i + 1){
        navLinks[i].addEventListener('click' , function(){
                //menu disappears
                subMenu.classList.add('hidden-menu');
                console.log("Im hidding!")                
        })
    }
//---------------------------------

// 2 GOAL: When page loads the "header image" on all the pages will do an animation (slide from top of page to its position)

    //Grab the header image

    
    //add an event listener to listen to when page loads/reloads to do the animation

    // add the animation css styling to scss sheet.

    // DOMContentLoaded is when the page is loading.
    add.addEventListener('DOMContentLoaded', function(){
            
    })

        //add a class to "header image"

//-----------------------------------

// 3 GOAL: When the user scrolls down the page a prompt screen that has the contact info and ask if you have any inquiries appears. 
//





