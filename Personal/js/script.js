$(document).ready(function(){ 
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky");
        }        
    })

   // slide-up script
  
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });  

    // toogle menu/navbar script 
    var typed =new Typed(".typing",{
        strings:["Devloper","Blogger","Feelancer","Designer"],
        typeSpeed:150,
        backSpeed:60,
        loop:true
    })
     //owl carousel script
    //  $('.carousel').owlCarousel({
    //      margin:20,
    //      loop:true,
    //      autoplayTimeOut:2000,
    //      autoplayHoverPause:true,
    //      responsive:{
    //          0:{
    //              items:1,
    //              nav:false
    //          },
    //          600:{
    //              items:2,
    //              nav:false
    //          },
             
    //          1000:{
    //              items:4,
    //              nav:false
    //          }
    //      }
    //  })

    
});


  AOS.init();
  $(document).ready(function(){
      $(window).scroll(function(){
          if(this.scrollY > 200){
              $("#topbtn").fadeIn();
          }else{
              $("#topbtn").fadeOut();
          }
      })

     $("#topbtn").click(function(){
         $('html,body').animate({scrollTop:0},800);
     })
    });
