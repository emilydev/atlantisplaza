$( document ).ready(function() {

	$(".habitacion-cont").mouseenter(function() {
		$(this).find(".room-info").slideDown( 500 );
	});

	$(".habitacion-cont").mouseleave(function() {
		$(this).find(".room-info").slideUp( 500 );
	});
	
});
