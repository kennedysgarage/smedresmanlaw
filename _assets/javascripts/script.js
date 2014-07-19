$(document).ready(function(){

  // On click scroll to the footer (contact info)
  $("a[href='#contact']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });

  // Navigation for mobile
	$('.menu').click(function(e){
		e.preventDefault();
		$('nav').slideToggle();
	});

});
