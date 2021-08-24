
    const mobileMenu = document.querySelector('.mobile-menu');
    const subMenu = document.querySelector('.nav-link-flex');
    const navLinks = document.querySelectorAll('ul li a');

    mobileMenu.addEventListener('mouseover', function(){
            subMenu.classList.toggle('hidden-menu');
    });

    subMenu.addEventListener('mouseleave', function(){
            subMenu.classList.add('hidden-menu');           
    });

    for (let i = 0; i < navLinks.length; i = i + 1){
        navLinks[i].addEventListener('click' , function(){
                subMenu.classList.add('hidden-menu');              
        })
    }






