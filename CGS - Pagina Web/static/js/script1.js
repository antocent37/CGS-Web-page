/*=============================================
BOTONES IDIOMAS
=============================================*/

$(".idiomaEn").click(function(){

	$(this).removeClass("bg-white")
	$(this).removeClass("text-dark")

	$(this).addClass("bg-info")
	$(this).addClass("text-white")

	$(".idiomaEs").removeClass("bg-info")
	$(".idiomaEs").removeClass("text-white")

	$(".idiomaEs").addClass("bg-white")
	$(".idiomaEs").addClass("text-dark")


})

$(".idiomaEs").click(function(){

	$(this).removeClass("bg-white")
	$(this).removeClass("text-dark")

	$(this).addClass("bg-info")
	$(this).addClass("text-white")

	$(".idiomaEn").removeClass("bg-info")
	$(".idiomaEn").removeClass("text-white")

	$(".idiomaEn").addClass("bg-white")
	$(".idiomaEn").addClass("text-dark")


})

/*=============================================
BOTÓN MENÚ
=============================================*/

if(window.matchMedia("(max-width:768px)").matches){

    $(".botonMenu").click(function(){

		$(".menuMovil").slideToggle('fast');
		$(".menuMovil").css({"top":$("header").height()})

	})	

	$(".menuMovil ul li a").click(function(e){

		$(".menuMovil").slideToggle('fast');

		e.preventDefault();

		var vinculo = $(this).attr("href");
		
		$("html, body").animate({

			scrollTop: $(vinculo).offset().top - 55

		}, 1000, "easeInOutBack")

	})


	

	
}else{

	$(".botonMenu").click(function(){

		$(".menu").slideToggle('fast');
	
	})
	$(".menu ul li a").click(function(e){

		$(".menu").slideToggle('fast');

		e.preventDefault();

		var vinculo = $(this).attr("href");
		
		$("html, body").animate({

			scrollTop: $(vinculo).offset().top - 60

		}, 1000, "easeInOutBack")

	})

}


/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText:"",
	scrollSpeed: 2000,
	easingType: "easeOutQuint"
})

/*=============================================
SLIDE BANNER
=============================================*/

$('.fade-slider').jdSlider({

    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 7000,
    isCursor: false,
    speed: 3000

})

$(".verMas").click(function(){

	var vinculo = $(this).attr("vinculo");

	$("html, body").animate({

		scrollTop: $(vinculo).offset().top - 60

	}, 1000, "easeInOutBack")

})

$(".banner .fade-slider").css({"margin-top":$("header").height()})


/*=============================================
	QUIENES SOMOS MOVIL
=============================================*/

$('.quienessomosMovil').jdSlider({
	wrap: '.slide-inner',
    slideShow: 1,
    slideToScroll: 1,
    isLoop: false
})

$(".quienessomosMovil li").click(function(){

	$(".modal-title").html($(this).children("a").children("h6").html());
	$(".modal-body img").attr("src", $(this).children("a").children("img").attr("src"));
	$(".modal-body p").html($(this).children("a").attr("descripcion"));

})


$(".quienessomos .grid-item").click(function(){

	$(".modal-title").html($(this).children("figure").children("h1").html());
	$(".modal-body img").attr("src", $(this).children("img").attr("src"));
	$(".modal-body p").html($(this).children("figure").children("h1").attr("descripcion"));

})

/*=============================================
	INTERACCIÓN QUIENES SOMOS
=============================================*/

$(".quienessomos .grid-item").mouseover(function() {

	$(this).children("figure").css({"height":"25%", "transition":".5s all"})

	$(".tituloPlan").html($(this).children("figure").children("h1").html());

	$(".descripcionPlan").html($(this).children("figure").children("h1").attr("descripcion"));

})


$(".quienessomos .grid-item").mouseout(function() {

	$(this).children("figure").css({"height":"100%", "transition":".5s all"})

	$(".tituloPlan").html($(".tituloPlan").attr("tituloPlan"));

	$(".descripcionPlan").html($(".descripcionPlan").attr("descripcionPlan"));

})

/*=============================================
	QUIENES SOMOS MOVIL
=============================================*/

$('.quienessomosMovil').jdSlider({
	wrap: '.slide-inner',
    slideShow: 1,
    slideToScroll: 1,
    isLoop: false
})

$(".quienessomosMovil li").click(function(){

	$(".modal-title").html($(this).children("a").children("h6").html());
	$(".modal-body img").attr("src", $(this).children("a").children("img").attr("src"));
	$(".modal-body p").html($(this).children("a").attr("descripcion"));

})


$(".quienessomos .grid-item").click(function(){

	$(".modal-title").html($(this).children("figure").children("h1").html());
	$(".modal-body img").attr("src", $(this).children("img").attr("src"));
	$(".modal-body p").html($(this).children("figure").children("h1").attr("descripcion"));

})

/*=============================================
		MODAL  OBRAS y MOVIL
=============================================*/
$('.obrasMovil').jdSlider({
	wrap: '.slide-inner',
    slideShow: 1,
    slideToScroll: 1,
    isLoop: false
})

$(".obrasMovil li").click(function(){

	$(".modal-title").html($(this).children("a").children("h6").html());
	$(".modal-body img").attr("src", $(this).children("a").children("img").attr("src"));
	$(".modal-body p").html($(this).children("a").attr("descripcion"));

})

$(".obras .obra-item").click(function(){

	$(".modal-title").html($(this).children("figure").children("h1").html());
	$(".modal-body img").attr("src", $(this).children("figure").children("img").attr("src"));
	$(".modal-body p").html($(this).children("figure").children("h1").attr("descripcion"));

})
$('.slideobras').jdSlider( {

	isSliding: true,
   isAuto: true,
   isLoop: true,
   isDrag: true,
   interval: 3000,
   isCursor: false,
   margin:0,
   timingFunction: 'ease',
   easing: 'swing'


});
