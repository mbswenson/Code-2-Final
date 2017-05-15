//this is macy swenson's code 2 final!!
//list of potential moji interactions
var mojieffects = ["ritaswitcher.js", "imageswitcher.js", "texteraser.js"];

function mojiEffectPicker (){
	var pickOne = mojieffects [Math.floor(mojieffects.length * Math.random())];
}

//p5.js starts here
var sketch = function(p5) {
	var canvas;

	//list of potential mojimessages
	var textytexty = ["moji is here to help!",
					  "moji is just being a concerned pal!",
					  "moji is perplexed by your choices!", 
					  "moji wants you to try harder!", 
					  "moji questions your interests!",
					  "moji is concerned about you!",
					  "moji wishes you'd work harder!",
					  "moji finds your habits questionable!",
					  "moji is anxious for you!",
					  "moji is here to support you!",
					  "moji wonders if you have dreams!",
					  "moji wants you to achieve goals!"];

	//list of potential mojifaces
	var mojimoji = ["( ^ o ^ )", "( ' o ' )", "( ^ - ^ )", "( ! o ! )" , "(? o ?)", "( ' = ' )", "( ^ = ^ )", "( ' 3 ' )", "( ^ 3 ^ )"];

	//randomly picks one
	var texteee = p5.random(textytexty);
	var mojifaces = p5.random(mojimoji);

	p5.setup = function(){
		console.log('running p5 setup');
		canvas = p5.createCanvas (200, 200);
		canvas.position (980, 20);

		// z-index is important and defines layers, make div that has a positive z-index which will go above the screen
		canvas.style ('z-index', '1000');
		p5.background(255);
		p5.noStroke();
		}

	p5.draw = function(){
		//prints coordinates b/c i am TIRED
		//console.log(p5.mouseX + "," + p5.mouseY);

		//this is the mojidialogue bubble
		p5.fill(252, 229, 96);
		p5.triangle(86, 151, 99, 136, 114, 151);
		p5.rect(10, 150, 180, 30, 5);

		//this is the mojifaces
		p5.stroke(0, 174, 239);
		p5.fill(0, 174, 239);
		p5.strokeWeight(1);
		p5.textSize(55);
		p5.text(mojifaces, 16, 108);

		//this is the mojidialogue
		p5.stroke(0);
		p5.strokeWeight(0);
		p5.textSize(11);
		p5.fill(0);
		p5.text(texteee, 15, 170);
	};
}

var p5sketch = new p5(sketch);