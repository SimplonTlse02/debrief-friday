(function(){
	$('form').on('submit', function(event){
		event.preventDefault();
		var title = $("#title").val();
		var content = $("#content").val();

		$.ajax({
			type:"POST",
			url:$("form").attr("action"),
			data: {title:title, content:content},
			success : function(){
				console.log('youhou');
			}
		})

	});


















	var app = {
		init:function(){
			$('form').on('submit', this.handleForm.bind(this));
		},
		handleForm: function(event){
			event.preventDefault();
			var title = $("#title").val();
			var content = $("#content").val();

			this.submitForm({title:title, content:content});
		},
		submitForm: function(data){
			$.ajax({
				type:"POST",
				url:$("form").attr("action"),
				data: data,
				success : this.success

			})
		}, 
		success: function(){
			console.log('youhou');
		}
	}

	$(document).ready(function(){
		app.init();
	});
})();
