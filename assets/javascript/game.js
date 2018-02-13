var guessWords = [
'hawks',
'celtics',
'nets',
'hornets',
'bulls',
'cavaliers',
'mavericks',
'nuggets',
'pistons',
'warriors',
'rockets',
'pacers',
'clippers',
'lakers',
'grizzlies',
'heat',
'bucks',
'timberwolves',
'pelicans',
'knicks',
'thunder',
'magic',
'sixers',
'suns',
'blazers',
'kings',
'spurs',
'raptors',
'jazz'
];

var wrongGuess = 10;
var wins = 0;
var losses = 0;
var computerGuess = "",



function start (){
computerGuess = guessWords[Math.floor(Math.random() * guessWords.length)];
var rightGuess = [];
for (var i = 0; i < computerGuess.length; i++) {
	rightGuess[i] = "_";
	}
	document.getElementById("letters").innerHTML= rightGuess.join("_");
}	



// document.onkeyup = function(event){
// 	words.push(event.key);
// 	var a = computerGuess.indexOf(event.key);
// 	console.log(a)

// }
