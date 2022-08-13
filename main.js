//==================== DropDown Menu =================
document.querySelector('.open-icon i').addEventListener('click', function(){
    document.querySelector('.menu').classList.add('active');
 });
 
 document.querySelector('.close-icon i').addEventListener('click', function(){
    document.querySelector('.menu').classList.remove('active');
 });

 //================= End of DropDown Menu==============

 //===================Animated Swiper Text===================
 anime({
   targets: ".serial",
   scale: [2,1],
   opacity: [0,1],
   easing: "easeInOutExpo",
})
   
anime({
   targets: ".info h1",
   translateX: [120,0],
   opacity: [0,1],
   easing: 'easeInOutExpo',
   delay: 500,
})

anime({
   targets: ".info .btn",
   translateX :[-120,0],
   opacity: [0,1],
   easing: 'easeInOutExpo',
   delay: 500,
})

swiper.on('slideChangeTransitionStart', function (){

   anime({
      targets: '.serial',
      scale: [2,1],
      opacity: [0, 1],
      easing:'easeInOutExpo',
    })
      
   anime({
      targets: '.info h1',
      translateX: [120,0],
      opacity: [0,1],
      easing: 'easeInOutExpo',
      delay: 500,
   })
   
})






//========================End Of Animation=================
