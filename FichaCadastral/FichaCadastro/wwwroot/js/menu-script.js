
$(document).ready(function () {
    $(".has-son").on("click", function () {


        var current = $(this).attr("id");
        var itemId = $(`#${current}-son`);
        var elementSon = $(itemId);
        if ($(elementSon).hasClass("son-active"))
            elementSon.removeClass("son-active")
        else {
            elementSon.addClass("son-active")
        }
    });

    //$(".has-son").on("mouseover", function () {


    //    var current = $(this).attr("id");
    //    var itemId = $(`#${current}-son`);
    //    var elementSon = $(itemId);
    //    elementSon.addClass("son-active")

    //    closeItemSon(elementSon)
    //});
    //function closeItemSon(currentItem) {
    //    if ($(currentItem).mouseover()){
    //        $(currentItem).mouseout()
    //    }
    //}
    $(".nav-item, .sub-item").on("mouseover", function () {
        var current = $(this);
        current.addClass("mouse-move")
    });
    $(".nav-item, .sub-item").on("mouseout", function () {
        var current = $(this);
        current.removeClass("mouse-move")
    });
});
 