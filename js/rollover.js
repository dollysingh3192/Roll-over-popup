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
                //$('#Div_' + currentli).css("display", "block");
                $('#Div_' + currentli).addClass("intro");
            } else {
                $('#' + arr[i]).removeClass("intro");
            }
        }

        // ON Rollover
        for (var i = 0; i < arr.length; i++) {
            var splitName = arr[i].split("_");
            var surname = splitName[splitName.length - 1];
            var c = arr[i];
            if ($('#' + c).hasClass("intro")) {
                $('#' + c).each(function() {
                    var context = $(this);
                    var conlength = context.length;
                    for (var i = 0; i < conlength; i++) {
                        $('div',context[i]).each(function() {
                        	//console.log($(this).outerText);
                        	// console.log(this.innerHTML);
                        	$(this).click(function()
                        	{
                        		console.log("clicked"+this.innerHTML);
                        	});
                        });
                    }
                });
            }
        }
    });
    // var slideIndex = 7;
    // showDivs(slideIndex);
    // window.plusDivs = function(n)
    // {
    //      showDivs(slideIndex += n);
    // }
    // // function plusDivs(n) {
    // //     showDivs(slideIndex += n);
    // // }
    // function showDivs(n) {
    //     var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     if (n > x.length) {
    //         slideIndex = 1
    //     }
    //     if (n < 1) {
    //         slideIndex = x.length
    //     }
    //     var pwidth = $(".header").width();
    //     console.log(pwidth);
    //     var from = pwidth / n;
    //     for (i = 0; i < n; i++) {
    //         x[slideIndex - 1].style.display = "block";
    //     }
    //     for (i = n; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    // }
    if ($('#Tabs').css('left') == '0px') {
        $('#before').attr("disabled", true);
    }
    var headerwidth = $(".header").width();
    var tabswidth = $("#Tabs").width();
    var remain = tabswidth - headerwidth;
    var slideIndex = 0;
    window.plusDivs = function(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        if (remain == $('#Tabs').css('left')) {
            $('#after').attr("disabled", true);
        }
        console.log(n);
        var tomovedivwidth = $(".mySlides").width();
        var tomovedivwidth = $(".mySlides").outerWidth();
        // var tomovedivwidth = document.getElementsByClassName("mySlides").offsetWidth;
        //var bordersOnBothSides = $(".mySlides").outerWidth() - $(".mySlides").innerWidth() ;
        console.log("Move ", tomovedivwidth);
        var tomove = tomovedivwidth * n;
        console.log(tomove);
        $("#Tabs").css({
            left: -tomove
        });
        if ($('#Tabs').css('left') == '0px') {
            $('#before').attr("disabled", true);
        } else {
            $('#before').attr("disabled", false);
        }
        var disableright = parseInt($('#Tabs').css('left'));
        var compare = parseInt(remain);
        if (Math.floor(disableright) == ("-" + Math.floor(compare))) {
            $('#after').attr("disabled", true);
        } else {
            $('#after').attr("disabled", false);
        }
    }
});