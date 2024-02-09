$( document ).ready(function() {
    $('#dot').css('border-color', 'transparent');
	$('#dot').noisy({
    'intensity' : 1, 
    'size' : 1000, 
    'opacity' : 1, 
    'fallback' : '', 
    'monochrome' : true
  }).css('background-color', '#fff');
});