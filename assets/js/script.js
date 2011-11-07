/* Author: Abderrahmane TAHRI JOUTI

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
	lastTopOffset = 0;

	$(".card").each(function(i,elm){

		$this = $(this);

	    $this.html("<span class='index-article-title'>"+lorem[i%nc]+"</span>");

	}).bind("click", function(evt){
		$this = $(this);
		lastTopOffset = $this.offset().top;
		var dcolor = $this.data("color");
        var bg = colors[dcolor].main;
		var color = colors[dcolor].side;

		$('body, body a').css({"background-color": bg});
		$('#menu, #menu a').css({"background-color": bg, "text-shadow": color+" 0px 2px 2px", "color": "white"})
		$("#content")
			.addClass("reading")
			.css({
/*				"box-shadow": color+" 10px 0px 10px",
				"border-left": " 10px solid "+color
*/				
				"border-width": "1px",
				"border-style": "solid",
				"border-color": color,
                "border-top": "0px"
			})
			.find("#open-article")
			.html(lorem_content)
			.show()
			.end()
			.find("#list-article")
			.hide();
            $("#content_wrapper").css({"box-shadow": color+" 0px 0px 10px"});
			$("#head-article")
			.css({
				/*"background": color,*/
				/*"box-shadow": "0px 0px 4px "+color*/

			}).show();

		$('html,body').animate({scrollTop: $("body").offset().top}, '700');
	});

	$("#close-article").live("click",function(){
		$('body, body a').css({"background-color": "white"})
		$('#menu, #menu a').css({"background-color": "white", "text-shadow": "none", "color": "black"})
		$("#content")
			.removeClass("reading")
			.css({
				"box-shadow": "none",
				"border-width": "0px",
				"border-style": "none",
				"border-color": "none"
			});


		$("#open-article").hide();
		$("#list-article").show();
		$('html,body').animate({scrollTop: lastTopOffset-35}, '700');
		lastTopOffset = 0;
		$("#head-article").hide();
	});

});

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



var lorem_content = "\
<article>\
	<h1>Nam quis nulla.</h1>\
	<p>Hac ita persuasione reducti intra moenia bellatores obseratis undique portarum aditibus, propugnaculis insistebant et pinnis, congesta undique saxa telaque habentes in promptu, ut si quis se proripuisset interius, multitudine missilium sterneretur et lapidum.</p>\
	<p>Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps, cum eum potius lenitate feminea ad veritatis humanitatisque viam reducere utilia suadendo deberet, ut in Gordianorum actibus factitasse Maximini truculenti illius imperatoris rettulimus coniugem.</p>\
	<p>Post hoc impie perpetratum quod in aliis quoque iam timebatur, tamquam licentia crudelitati indulta per suspicionum nebulas aestimati quidam noxii damnabantur. quorum pars necati, alii puniti bonorum multatione actique laribus suis extorres nullo sibi relicto praeter querelas et lacrimas, stipe conlaticia victitabant, et civili iustoque imperio ad voluntatem converso cruentam, claudebantur opulentae domus et clarae.</p>\
	<p>Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.</p>\
	<p>Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.</p>\
	<p>Sed (saepe enim redeo ad Scipionem, cuius omnis sermo erat de amicitia) querebatur, quod omnibus in rebus homines diligentiores essent; capras et oves quot quisque haberet, dicere posse, amicos quot haberet, non posse dicere et in illis quidem parandis adhibere curam, in amicis eligendis neglegentis esse nec habere quasi signa quaedam et notas, quibus eos qui ad amicitias essent idonei, iudicarent. Sunt igitur firmi et stabiles et constantes eligendi; cuius generis est magna penuria. Et iudicare difficile est sane nisi expertum; experiendum autem est in ipsa amicitia. Ita praecurrit amicitia iudicium tollitque experiendi potestatem.</p>\
	<p>Illud tamen te esse admonitum volo, primum ut qualis es talem te esse omnes existiment ut, quantum a rerum turpitudine abes, tantum te a verborum libertate seiungas; deinde ut ea in alterum ne dicas, quae cum tibi falso responsa sint, erubescas. Quis est enim, cui via ista non pateat, qui isti aetati atque etiam isti dignitati non possit quam velit petulanter, etiamsi sine ulla suspicione, at non sine argumento male dicere? Sed istarum partium culpa est eorum, qui te agere voluerunt; laus pudoris tui, quod ea te invitum dicere videbamus, ingenii, quod ornate politeque dixisti.</p>\
	<p>Coactique aliquotiens nostri pedites ad eos persequendos scandere clivos sublimes etiam si lapsantibus plantis fruticeta prensando vel dumos ad vertices venerint summos, inter arta tamen et invia nullas acies explicare permissi nec firmare nisu valido gressus: hoste discursatore rupium abscisa volvente, ruinis ponderum inmanium consternuntur, aut ex necessitate ultima fortiter dimicante, superati periculose per prona discedunt.</p>\
	<p>Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.</p>\
	<p>Ibi victu recreati et quiete, postquam abierat timor, vicos opulentos adorti equestrium adventu cohortium, quae casu propinquabant, nec resistere planitie porrecta conati digressi sunt retroque concedentes omne iuventutis robur relictum in sedibus acciverunt.</p>\
	<p>Et est admodum mirum videre plebem innumeram mentibus ardore quodam infuso cum dimicationum curulium eventu pendentem. haec similiaque memorabile nihil vel serium agi Romae permittunt. ergo redeundum ad textum.</p>\
	<p>Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, non admodum flagitem. re mihi non aeque satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.</p>\
	<p>Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret, Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.</p>\
	<p>Batnae municipium in Anthemusia conditum Macedonum manu priscorum ab Euphrate flumine brevi spatio disparatur, refertum mercatoribus opulentis, ubi annua sollemnitate prope Septembris initium mensis ad nundinas magna promiscuae fortunae convenit multitudo ad commercanda quae Indi mittunt et Seres aliaque plurima vehi terra marique consueta.</p>\
	<p>Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.</p>\
</article>\
";

function golden_ratio(){
	return (1+Math.sqrt(5)) / 2;
}