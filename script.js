$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
           $('.navbar').addClass("sticky");
        }
        else{
           $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            }
        }
    });

    //typing animation script
    var typed = new Typed(".typing",{
        strings:["FullStack Developer","Blog Writer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed = new Typed(".typing-2",{
        strings:["FullStack Developer","Blog Writer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed = new Typed(".typing-3",{
        strings:["Linkedin","Medium","GitHub"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
});