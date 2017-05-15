//how do i get the rita result to happen?
//this selects and replaces the text
var regex = /\w+/gi;
var newText = "??????????";

getTextNodes(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue;
  	textNodes[i].nodeValue = text.replace(regex, newText);
	}
});

function getTextNodes(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

//p5.js+rita.js starts here
var sketch = function(p5) {
	var canvas;

	p5.preload = function() {
		yaml = loadStrings("mojitalk.yaml");
	}

	p5.setup = function() {
		console.log('runnning p5 setup');
		grammar = new RiGrammar(yaml.join('\n'));
		var result = grammar.expand();

	};


};

var p5sketch = new p5(sketch);