// Mezoo 20131101
$(function(){
	
	var scrollorama = $.scrollorama({ blocks:'#bloc1, #bloc2, #tronco1', enablePin:false});
	scrollorama.animate('#idea',{ delay: 600, duration: 100, property:'opacity', start:1, end:0})
		.animate('#sueno',{ delay: 500, duration: 100, property:'opacity', start:1, end:0})
		.animate('#fija',{ delay: 450, duration: 100, property:'opacity', start:1, end:0})
		.animate('#crecer',{ delay: 450, duration: 100, property:'opacity', start:1, end:0});
		
	
	scrollorama.animate('#imagination',{ delay: 400, duration: 100, property:'opacity', start:1, end:0})
		.animate('#viajo',{ delay: 300, duration: 100, property:'opacity', start:1, end:0})
		.animate('#llevar',{ delay: 200, duration: 100, property:'opacity', start:1, end:0})
		.animate('#interior',{ delay: 100, duration: 100, property:'opacity', start:1, end:0})
		.animate('#imagenes',{ delay: 30, duration: 100, property:'opacity', start:1, end:0})
		.animate('#tangible',{ delay: 20, duration: 50, property:'opacity', start:1, end:0});
		
	var scrollorama = $.scrollorama({ blocks:'#bloc4', enablePin:false});
	scrollorama.animate('#instrumento',{ delay: 350, duration: 100, property:'opacity', start:1, end:0})
		.animate('#experiencias',{ delay: 100, duration: 100, property:'opacity', start:1, end:0})
		.animate('#esencia',{ delay: 10, duration: 100, property:'opacity', start:1, end:0});
		
	$("#seed").click(function() {
    	$("#volet").animate({"height" : "0"}, 2500);
 	});	
		
	$(window).on('scroll', function() {
	var $tronc = $('#tronco1');
	var $raiz1 = $('#raiz-tronco-01');
	var $raiz2 = $('#raiz-tronco-02');
	var $raiz3 = $('#raiz-tronco-03');
	var st = window.scrollY;
	var $troncTop = ($tronc.position().top)+100;
	var $size1 = 100+($troncTop-st);
	var $size2 = 70+($troncTop-st);
	var $size3 = 87+($troncTop-st);
	
	if ( st >= $troncTop && st <= ($troncTop + 100)) {
		$raiz1.stop().animate({'width':+$size1+'px','height':+$size1+'px' }, 500);
		$raiz2.stop().animate({'width':+$size2+'px','height':+$size2+'px' }, 10);
		$raiz3.stop().animate({'width':+$size3+'px','height':+($size3*1.46)+'px' }, 0);
	}
	
	var $tronc2 = $('#tronco2');
	var $slide1 = $('#slide4-1');
	var $slide2 = $('#slide4-2');
	var $slide3 = $('#slide4-3');
	var $tronc2Top = ($tronc2.position().top)+100;
	var $size21 = 110+($tronc2Top-st);
	var $size22 = 147+($tronc2Top-st);
	var $size23 = 78+($tronc2Top-st);
	
	if ( st >= $tronc2Top && st <= ($tronc2Top + 100)) {
		$slide1.stop().animate({'width':+$size21+'px','height':+$size21+'px' }, 500);
		$slide2.stop().animate({'width':+$size22+'px','height':+$size22+'px' }, 10);
		$slide3.stop().animate({'width':+$size23+'px','height':+($size23*1.08)+'px' }, 0);
	}
	
	var $tronc3 = $('#tronco3');
	var $slide1 = $('#slide6-1');
	var $slide2 = $('#slide6-2');
	var $slide3 = $('#slide6-3');
	var $slide4 = $('#slide6-4');
	var $slide5 = $('#slide6-5');
	var $tronc3Top = ($tronc3.position().top)+450;
	var $size31 = 114+($tronc3Top-st);
	var $size32 = 38+($tronc3Top-st);
	var $size33 = 38+($tronc3Top-st);
	var $size34 = 30+($tronc3Top-st);
	var $size35 = 82+($tronc3Top-st);
	
	if ( st >= $tronc3Top && st <= ($tronc3Top + 450)) {
		$slide1.stop().animate({'width':+$size31+'px','height':+$size31+'px' }, 500);
		$slide2.stop().animate({'width':+$size32+'px','height':+$size32+'px' }, 10);
		$slide3.stop().animate({'width':+$size33+'px','height':+$size33+'px' }, 0);
		$slide4.stop().animate({'width':+$size34+'px','height':+$size34+'px' }, 0);
		$slide5.stop().animate({'width':+$size35+'px','height':+($size35*1.26)+'px' }, 0);
	}
	
	
    })
    .scroll();
	
});