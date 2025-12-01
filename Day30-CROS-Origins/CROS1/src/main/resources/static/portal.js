$(document).ready(function () {
    // Print initialization timestamp to console
    console.log("Attempting initialization " + new Date().toString());

    $("#accessportal").click(function (event) {
        event.preventDefault();
        ajaxGet();
    });

    function ajaxGet() {
        $("#apiResponse").html("Loading...");

        $.ajax({
            url: "http://localhost:8081/access", // backend URL
            type: "GET",
            success: function(result) {
                $("#apiResponse").html(result);
            },
            error: function(xhr, status, error) {
                $("#apiResponse").html("Error: " + error);
                console.error("AJAX Error:", status, error);
            }
        });
    }
});
