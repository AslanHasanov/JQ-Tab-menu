



  $(document).ready(function(){

    let mains=document.querySelectorAll('.main a')
    let menus=document.querySelectorAll('.down ul')

    mains.forEach(main => {
      
      main.onclick=function(e){
        e.preventDefault();
        let id=this.id
        menus.forEach(menu=>{
          if(menu.id==id){
            $(menu).slideToggle()
          }
          else{
            $(menu).slideUp()
          }
        })
      }

      menus.forEach(menu=>{
          $(menu).hide()
      })
      
    });
   
  })
   

  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });