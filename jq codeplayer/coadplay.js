function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() +
        "</style></head><body>" + $("#htmlPanel").val() + "</body></html>")
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val())
}

$(".toggleButton").hover(function () {
    $(this).addClass("highlightedButton")
}, function () {
    $(this).removeClass("highlightedButton")
})

$(".togglebutton").click(function () {
    $(this).toggleClass("active")
    $(this).removeClass("highlightedButton")
    var panelId = $(this).attr("id") + "Panel"
    //alert(panelId)
    $("#" + panelId).toggleClass("hidden")
    var numOfPannels = 4 - $(".hidden").length
    $(".panel").width(($(window).width() / numOfPannels) - 10)

})

//$("textarea").height($(window).height() - $("#header").height()-15)
$(".panel").height($(window).height() - $("#header").height() - 15)
$(".panel").width(($(window).width() / 2) - 10)
updateOutput()
$("textarea").on("change keyup paste", function () {
    updateOutput()
})