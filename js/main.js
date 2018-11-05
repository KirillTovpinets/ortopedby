let numbers = [];
const initVal = [];
let element = document.getElementById('first-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

element = document.getElementById('second-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

element = document.getElementById('third-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

element = document.getElementById('fourth-number');
initVal.push(+element.innerText);
element.innerText = 0;
numbers.push(element);

numbers.forEach((element, index) => {
    const timer = setInterval(function(){ 
        let cur = +element.innerText;
        element.innerText = ++cur; 
        if(+element.innerText === initVal[index]){
            clearInterval(timer);
        }
    }, 10);
})
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin:20,
        lazyLoad:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    setTimeout(() => {
        $(".slogan").addClass("fadeInUp");
    }, 1000);
    $(".overlay").addClass("fadeOut");
  });


