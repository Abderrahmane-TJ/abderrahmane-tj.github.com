/*

Author: Abderrahmane TAHRI JOUTI

*/

var colors
$(document).ready(function(){
    colors = {
		"redone": { main: "#dc3912", side: "#95270c" },
		"blueone": { main: "#3366cc", side: "#24478f" },
		"yellowone": { main: "#ff9900", side: "#b36b00" },
		"pinkone": { main: "#dd4477", side: "#b42152" },
		"greenone": { main: "#66aa00", side: "#385d00" },
		"purpleone": { main: "#990099", side: "#4d004c" },
		"bluetwo": { main: "#316395", side: "#1e3d5b" },
		"redtwo": { main: "#b82e2e", side: "#7b1f1f" },
		"greentwo": { main: "#109618", side: "#09510d" },
		"greenthree":{ main: "#6ECF00", side: "#478500" },
		"bluethree": { main: "#0099c6", side: "#005e7a" },
		"kamouni": { main: "#6B5E44", side: "#3B3426" },
		"greyone": { main: "#474747", side: "#212121" },
		"greytwo": { main: "#333", side: "#0D0D0D" }
	},
	nc = 10 /* Object.size(colors) */,
	lorem = ["Nam quis nulla.","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet", "Etiam posuere quam ac quam.","In sem justo, commodo ut.","Morbi a metus. biglou sidi.","Praesent in mauris eu.", "Morbi leo mi, malou fati.","Maecenas ipsum velit","Aenean placerat. tirabichu."],
	cache = []
	lastTopOffset = 0,
    currentTopOffset = 0;

	$(".home article").bind("click", function(evt){
		$this = $(this);
		lastTopOffset = $this.offset().top;
		var dcolor = $this.attr("class");
        var bg = colors[dcolor].main;
		var color = colors[dcolor].side;

		$('body, body a').css({"background-color": bg});
		$('#menu, #menu a').css({/*"background-color": bg,*/ "text-shadow": color+" 0px 1px 1px", "color": "white"});

		$("#container")
			.css({
				"border-width": "1px",
				"border-style": "solid",
				"border-color": color,
			})
		.find(".page")
			.show()
		.end()
		.find(".home")
		    .hide();

            $("#container")
    		    .addClass("reading")
                .css({"box-shadow": color+" 0px 0px 10px"});


		$('html,body').animate({scrollTop: $("body").offset().top}, '700');
	});

	$("#close-article").live("click",function(){
		$('body, body a').css({"background-color": "white"})
		$('#menu, #menu a').css({/*"background-color": "white",*/ "text-shadow": "none", "color": "black"})
		$("#container")
			.css({
				"border-width": "0px",
				"border-style": "none",
				"border-color": "none"
			})
			.find(".page")
				.hide()
			.end()
			.find(".home")
		    	.show()
		    .end()
		    .removeClass("reading")
            .css({"box-shadow": "none"});




		$('html,body').animate({scrollTop: lastTopOffset-35}, '700');
		lastTopOffset = 0;

		$(this).hide();

	});

    $("#go-top-article").click(function() {
          $('html,body').animate({scrollTop: $("body").offset().top}, '700');
    });

    $(window).scroll(function(e) {
        currentTopOffset = $(window).scrollTop();
    })

    checkChanges = setInterval(function() {
        if($('.page').is(':visible')){
        	$("#close-article").show();
        }
    	if( currentTopOffset > 175 ){
            $("#go-top-article").show();
        }else{
            $("#go-top-article").hide();
        }

    }, 250)

});
/*
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



function golden_ratio(){
	return (1+Math.sqrt(5)) / 2;
}
*/
