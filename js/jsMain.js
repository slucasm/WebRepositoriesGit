$(document).ready(function(){
	$("#buttonsearch").click(function(){
		var username = $('#user').val();
		$.ajax({
			type: "GET",
			url: "https://api.github.com/users/"+username+"/repos",
			data: { get_param: 'value'},
			datatype: 'json',
			success: function(data){
				$(".repositorios").html("");
				$.each(data,function(index,element){
					$(".repositorios").append("<tr>\
						<td>"+element.name+"</td>\
						<td>"+element.description+"</td>\
						<td>"+element.watchers+"</td>\
						 </tr>");
				});
			}
		});
	});
});