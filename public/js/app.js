// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");
        if (newdevoured == "0") {
            newdevoured = "1"
        } else {
            newdevoured = "0"
        }
        // console.log(newdevoured)
        var newdevouredState = {
            devoured: newdevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: newdevouredState
        }).then(
            function (result) {
                console.log("changed devoured to", newdevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newburger = {
            name: $("#ca").val().trim(),
            devoured: "0"
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});