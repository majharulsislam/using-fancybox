
$(document).ready(function(){
	
	$('[data-fancybox="image"]').fancybox({
		afterLoad : function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

			if ( pixelRatio > 1.5 ) {
				current.width  = current.width  / pixelRatio;
				current.height = current.height / pixelRatio;
				}
			}
		});
		
		
		$('[data-fancybox]').fancybox({
			protect: true
		});
	
});