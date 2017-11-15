// Check off specific todos by clicking

var input = $("#todoInput");

$("ul").on("click", "li", function(){
	$(this).toggleClass("strike");
});

// Removal code for line items

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	
	event.stopPropagation();
})

$(input).on("keypress", function(e){
	if(event.which === 13) {
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + $(this).val() + "</li>")
		$(this).val("");
	}
})

$(".fa-plus").on("click", function(){
	$(input).fadeToggle();
})