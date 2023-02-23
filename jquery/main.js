$(document).ready(function() {
	
	$('#htmlBar').LineProgressbar({
		percentage : 80,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#bootBar').LineProgressbar({
		percentage : 75,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#javaScriptBar').LineProgressbar({
		percentage : 60,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#jqueryBar').LineProgressbar({
		percentage : 65,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#angularBar').LineProgressbar({
		percentage : 65,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#jsonBar').LineProgressbar({
		percentage : 90,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#javaCBar').LineProgressbar({
		percentage : 60,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#springMvcBar').LineProgressbar({
		percentage : 55,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#hibernateBar').LineProgressbar({
		percentage : 60,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});
	$('#sqlBar').LineProgressbar({
		percentage : 70,
		height : '10px',
		radius : '0px',
		fillBackgroundColor: '#444444'
	});

	var heights = $(".colequal").map(function() {
		return $(this).height();
	}).get(),

	maxHeight = Math.max.apply(null, heights);

	$(".colequal").height(maxHeight);

});
