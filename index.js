$(document).ready(function () {

    $(".Next").on("click", function (e) {
        
        var currentActiveImage = $(".image-shown");
        var nextActiveImage = currentActiveImage.next();
        
        if(nextActiveImage.length == 0)
        {
            nextActiveImage = $(".inner img").first();
        }
        
        
         currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
        nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index" , 20);
        $("inner img").not([ currentActiveImage,  nextActiveImage]).css("z-index",1);
        
        e.preventDefault();
    });
    
    //
    
    $("Previous").on ("click" , function(e){

        var currentActiveImage = $(".image-shown");
        var nextActiveImage = currentActiveImage.prev();
        
     if(nextActiveImage.length == 0)
     {
      nextActiveImage = $(".inner img").last();
         
     }
        
        currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
        nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index", 20);
        $(".inner img").not([currentActiveImage,nextActiveImage]).css("z-index",1);

    e.preventDefault();
        
    });
    
    
});