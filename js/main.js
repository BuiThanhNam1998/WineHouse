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
// product detail carousel
$(".product-detail-thumbnail").click(function(){
	var url = $(this).attr('src');
	$("#productImage").attr('src',url);
	$("#big-img").attr('src',url);
	$("#productImageWrap").attr('href',url);
});
$('.show').zoomImage();
//
$(".your-rate-icon").click(function(){
    value = $(this).data("value");
    console.log(value);
    $("#your-rate").val(value);
    for (var i = 1; i <= value; i++) {
        star = $("i[data-value='" + i + "']"); 
        star.addClass("fa-star");
        star.removeClass("fa-star-o");
    }
    for (var i = 5; i > value; i--) {
        star = $("i[data-value='" + i + "']"); 
        star.addClass("fa-star-o");
        star.removeClass("fa-star");
    }
});
//
$(".your-rate-icon").hover(function(){
    value = $(this).data("value");
    console.log(value);
    for (var i = 1; i <= value; i++) {
        star = $("i[data-value='" + i + "']"); 
        star.addClass("fa-star");
        star.removeClass("fa-star-o");
    }
    for (var i = 5; i > value; i--) {
        star = $("i[data-value='" + i + "']"); 
        star.addClass("fa-star-o");
        star.removeClass("fa-star");
    }
});