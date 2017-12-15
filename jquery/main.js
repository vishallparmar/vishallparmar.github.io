$(document).ready(function() {
	$('#htmlBar').LineProgressbar({
		percentage : 80,
		height : '10px',
		radius : '10px'
	});
	$('#bootBar').LineProgressbar({
		percentage : 75,
		height : '10px',
		radius : '10px'
	});
	$('#jqueryBar').LineProgressbar({
		percentage : 65,
		height : '10px',
		radius : '10px'
	});
	$('#jsonBar').LineProgressbar({
		percentage : 90,
		height : '10px',
		radius : '10px'
	});
	$('#javaCBar').LineProgressbar({
		percentage : 60,
		height : '10px',
		radius : '10px'
	});
	$('#sqlBar').LineProgressbar({
		percentage : 70,
		height : '10px',
		radius : '10px'
	});

	var heights = $(".colequal").map(function() {
		return $(this).height();
	}).get(),

	maxHeight = Math.max.apply(null, heights);

	$(".colequal").height(maxHeight);

});
