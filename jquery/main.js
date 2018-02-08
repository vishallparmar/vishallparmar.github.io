$(document).ready(function() {
	$('#htmlBar').LineProgressbar({
		percentage : 80,
		height : '10px',
		radius : '0px'
	});
	$('#bootBar').LineProgressbar({
		percentage : 75,
		height : '10px',
		radius : '0px'
	});
	$('#jqueryBar').LineProgressbar({
		percentage : 65,
		height : '10px',
		radius : '0px'
	});
	$('#jsonBar').LineProgressbar({
		percentage : 90,
		height : '10px',
		radius : '0px'
	});
	$('#javaCBar').LineProgressbar({
		percentage : 60,
		height : '10px',
		radius : '0px'
	});
	$('#sqlBar').LineProgressbar({
		percentage : 70,
		height : '10px',
		radius : '0px'
	});
	$('#javaScriptBar').LineProgressbar({
		percentage : 60,
		height : '10px',
		radius : '0px'
	});
	
	var heights = $(".colequal").map(function() {
		return $(this).height();
	}).get(),

	maxHeight = Math.max.apply(null, heights);

	$(".colequal").height(maxHeight);

});
