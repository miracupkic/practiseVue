
$(document).ready(function(){
	
	$("#start").click(function moving(){
			$("#div1").animate({
			"top":Math.random()*600,
			"left":Math.random()*1050});
			$("#div2").animate({
			"top":Math.random()*500,
			"left":Math.random()*1150});
			$("#div3").animate({
			"top":Math.random()*665,
			"left":Math.random()*1030}); 
			$("#div4").animate({
			"top":Math.random()*550,
			"left":Math.random()*975});
			$("#div5").animate({
			"top":Math.random()*530,
			"left":Math.random()*965});
			$("#div6").animate({
			"top":Math.random()*570,
			"left":Math.random()*995});
		return setInterval(moving,1500);
		});
		
	$("#stop").click(function(){
		location.reload();
	});
	
	

	
		
	$("#div1").click(function(){
		$("#div1").css({
			"height":200,
			"width":200,
			"borderRadius":0});
		$("#div1 p").text("DOUBLE CLICK")
		});	
		
		$("#div1").dblclick(function(){
		$("#div1").css({
			"height":150,
			"width":150,
			"borderRadius":77
		});
		$("#div1 p").text("CLICK");	
		});
	
	
	$("#div3").mouseenter(function(){
		$("#div3").css({
		"background-color":"#000000"
		}).mouseleave(function(){
		$("#div3").css({
		"background-color":"#DF0BE2"
		});
		});
	});
	
	$("#div2").click(function(){
		$("#div2").css({
			"height":200,
			"width":200,
			"borderRadius":101});
		$("#div2 p").text("DOUBLE CLICK")
		});	
		
		$("#div2").dblclick(function(){
		$("#div2").css({
			"height":150,
			"width":150,
			"borderRadius":77
		});
		$("#div2 p").text("CLICK");	
		});
		
	$("#div4").mouseenter(function(){
		$("#div4").css({
		"background-color":"#FFFFFF",
		"borderRadius":0
		}).mouseleave(function(){
		$("#div4").css({
		"background-color":"#1A04E2",
		"borderRadius":77
		});
		});
	});
	
	$("#showH").click(function(){
		$("#div5").toggle(1500);
		$("#div6").toggle(1500);
	});
	
	$("#div5").click(function(){
		$("#div5").hide(1000);
	});
	
	$("#div5").mouseenter(function(){
		$("#div5").css({
		"background-color":"#1221AA"
		}).mouseleave(function(){
		$("#div5").css({
		"background-color":"#00AA16"
		});
		});
	});
	
	$("#div6").mouseenter(function(){
		$("body").css({
		"background-color":"#AB2665"
		}).mouseout(function(){
		$("body").css({
		"background-color":"#F3FF14"
		});
		});
	});
	
		
	
});