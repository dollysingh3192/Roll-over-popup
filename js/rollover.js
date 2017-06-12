$(document).ready(function() {
    $("ul li").click(function() {
        var currentli = this.id;
        // var matcheddiv;
        var arr = [];
        var allDiv = document.querySelectorAll("div"),
            i;
        for (i = 0; i < allDiv.length; ++i) {
            if (allDiv[i].id.match(/Div_/i)) {
                arr.push(allDiv[i].id);
            }
        }
        for (var i = 0; i < arr.length; i++) {
            var fli = "Div_" + currentli;
            if (arr[i] == fli) {
                $('#Div_' + currentli).css("display", "block");
            } else {
                $('#' + arr[i]).css("display", "none");
            }
        }
    });
    var slideIndex = 7;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        var pwidth = $(".header").width();
        console.log(pwidth);
        var from = pwidth / n;
        for (i = from; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < from; i++) {
            x[slideIndex - 1].style.display = "block";
        }
    }
});