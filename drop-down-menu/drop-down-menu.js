(function(jQuery){
jQuery.fn.menuDeroulant=function(){
           jQuery(this).each(function(){// this = premier niveau du menu, on boucle sur chaque li
	            jQuery(this)
                  .mouseover(function(){
                             jQuery(this).children(".sub-menu").addClass("visible");
	                  })
                  .mouseout(function(){
                             jQuery(this).children(".sub-menu").removeClass("visible");
		    })
	                  .focusin(function(){
                             jQuery(this).children(".sub-menu").addClass("visible");
                       })
                  .focusout(function(){
                        jQuery(this).children(".sub-menu").removeClass("visible");
                  });
           return jQuery(this); 
     });
	};
})(jQuery); 

jQuery(document).ready(function(){
	jQuery('#navigation > ul > li').menuDeroulant(); 
// s'applique à tous les éléments li de premier niveau
});
