$.getJSON( "js/reviews.json", function( reviews ) {

	arr = [
	 {"Name":"Peter","Job":"Programmer"},
	 {"Name":"John","Job":"Programmer"},
	 {"Name":"Kevin","Job":"Scientist"},
	];

	$.each(arr, function(i){
		var templateString = '<div class="card"><p>My name is: '+arr[i].Name+'</p><p>My job is: '+arr[i].Job+'</p></div>';
		$('#col col-sm-6').append(templateString);
	})
});