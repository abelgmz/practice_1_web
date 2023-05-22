$("#btn-clear").click(function (event) {
	$("#name").val("");
	$("#paternal-surname").val("");
	$("#maternal-surname").val("");
	$("#day-of-birth").val("");
	$("#email").val("");
	$("#password").val("");
	event.preventDefault();
});
