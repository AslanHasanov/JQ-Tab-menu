



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
   