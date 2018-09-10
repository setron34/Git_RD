$(document).ready(function () {
    $(".sidebox").has(".searchForm").addClass("srch");
    $(".show-menu").bind("click", function () {
        $(this).siblings(".vert-menu").slideToggle("slow");
        $(this).toggleClass("opened")
    });
    $(".vert-menu li:has(ul) > a").addClass("sub-mn");
    $("a.logo-b").click(function (a) {
        $(a.target).hasClass("uz-signs") && a.preventDefault()
    })
});