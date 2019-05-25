function increaseValue() {
	var value = parseInt($('#number').val(), 10);
	value = isNaN(value) ? 1 : value;
	value++;
	$('#number').val(value)
}

function decreaseValue() {
	var value = parseInt($('#number').val(), 10);
	value = isNaN(value) ? 1 : value;
	if(value < 2){
		value = 1; 
	}
	else{
		value--;
	}
	$('#number').val(value);
}
$('#back-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});
//search form
$('#searchFormButton').click(function(){
	searchForm = $('#searchForm');
	if(searchForm.css('visibility') == 'hidden'){
		searchForm.css('visibility','visible');
		return false;
	}
	if(searchForm.css('visibility') == 'visible'){
		searchForm.css('visibility','hidden');
		return false;
	}
});
// aside dropdown
 $("#asideDropdownIcon").click(function(){
    $("#asideDropdown").slideToggle();
  });	
