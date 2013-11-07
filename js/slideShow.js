var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});
	
	parallax.add($("#first"))
			.add($("#second"))
			.add($("#third"))
			.add($("#fourth"))
			.add($("#fifth"))
			.add($("#sixth"))
			.add($("#seventh"));
			
	parallax.background = $("body");
	
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
	};
	
	parallax.slide1.onload=function(){
		setTop("bloc2", "bloc2");
	};
	
	parallax.slide2.onload=function(){
		setTop("bloc3", "bloc3");
		setBottom("bloc1", "bloc1");
	};
	
	parallax.slide3.onload=function(){
		setTop("bloc4", "bloc4");
		setBottom("bloc2", "bloc2");
	};

	parallax.slide4.onload=function(){
		setTop("bloc5", "bloc5");
		setBottom("bloc3", "bloc3");
	};
	
	parallax.slide5.onload=function(){
		setTop("bloc6", "bloc6");
		setBottom("bloc4", "bloc4");
	};	
	
	parallax.slide6.onload=function(){
		setTop("bloc7", "bloc4");
		setBottom("bloc5", "bloc5");
	};
	
	parallax.slide7.onload=function(){
		setBottom("bloc6", "bloc6");
	};
	
	function setTop(page, text){
		$("#seed").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}
	
	function setBottom(page, text){
		
		bottomKey = function(){
			parallax[page].bottom();
		};
	}
	
	parallax.slide1.show();
	
});