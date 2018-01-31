(function(jQuery){
	jQuery.fn.highContrast=function(){
		var body = jQuery(this);
		var button = body.children('.btn-contrast');
		var image = button.children('img');
		var texte = button.children('.text-contrast');
		var storage = sessionStorage.getItem('highcontrast');
		
		if (storage === "yes") {
			body.addClass('highcontrast'); 
			button.addClass('actif');
			image.attr('src', 'contrast-renforce.svg');
			texte.html('Contraste standard');
		}
		
	    button.on('click', function(){
			if (button.hasClass('actif')){
				button.removeClass('actif');
				image.attr('src', 'contrast-standard.svg');
				texte.html('Contraste renforcé');
				body.removeClass('highcontrast');
				if (body.attr('class') === '')
					body.removeAttr('class');
				sessionStorage.setItem('highcontrast', 'no');
			}
			else {
				button.addClass('actif');
				image.attr('src', 'contrast-renforce.svg');
				texte.html('Contraste standard');
				body.addClass('highcontrast');
				sessionStorage.setItem('highcontrast', 'yes');
			}
		});
		return jQuery(this); 
	}
})(jQuery); 
		

jQuery(document).ready(function(){
	jQuery('body').highContrast(); 
});

  
  