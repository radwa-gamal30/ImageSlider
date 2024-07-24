   $.fn.showgallery= function(){

        const imageSlider=[
            './images/i1-thumb.jpg',
            './images/i2-thumb.jpg',
            './images/i3-thumb.jpg',
            './images/i4-thumb.jpg'
        ]
        
        let currentImage=0;
        $('.popup_container a').click(function(event){
            event.preventDefault();
            currentImage=$(this).index('.popup_container a');
             const pop_image=imageSlider[currentImage];
             $("body").append('<div class="image_wrap"><div class="close"> x </div><button class="previous" > &lt; </button> <div class="pop_image"><img src="'+pop_image+'"></div><button class="next"> &gt; </button></div>');
         
         
         
         $('.image_wrap').fadeIn();
         
         $('.previous').click(function(){
           currentImage=(currentImage - 1 + imageSlider.length ) % imageSlider.length;
           const new_image=imageSlider[currentImage];
           $('.pop_image img').attr('src',new_image);
         });
         
         $('.next').click(function(){
            currentImage=(currentImage + 1) % imageSlider.length;
            const new_image=imageSlider[currentImage];
            $('.pop_image img').attr('src',new_image);
         });
     
         $('.close').click(function() {
            $('.image_wrap').fadeOut(function(){
                     $(this).remove();
            });
         });
     });


    }
   
$('.popup_container a img').showgallery();

