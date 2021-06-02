$(document).ready(function () {
    $("#spreadBtn").click(function () {
        if ($("#hiddenContent").is(":visible")) {
            $("#hiddenContent").slideUp();
        } else {
            $("#hiddenContent").slideDown();
        }
    });
});




