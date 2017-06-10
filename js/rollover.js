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
        	var fli = "Div_"+currentli;
            if (arr[i] == fli) {
                $('#Div_' + currentli).css("display", "block");
            }
            else
            {
            	 $('#'+arr[i]).css("display", "none");
            }
        }
    });
});