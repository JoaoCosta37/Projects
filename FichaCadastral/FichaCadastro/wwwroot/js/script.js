$(document).ready(function () {

    $(".navbar button").on("mouseover", function () {
        let current = $(this);
        current.css("text-decoration", "underline");
    })

    $(".navbar button").on("mouseout", function () {
        let current = $(this);
        current.css("text-decoration", "none");
    })

})
