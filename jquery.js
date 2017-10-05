$(function(){
	console.log('DOM loaded - you can have fun');

	$("span:even","p:even").css('color', 'blue');

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {

	    var button = '<br><button class="btn" data-tmp="' + index + '">Click me</button></br>'
	    $(element).append(button)

	});

	$("button").click(function(){
		alert($(this).attr("data-tmp"));
	});

});