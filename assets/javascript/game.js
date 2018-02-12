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

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongGuess = 10;
var words = [];
var wins = 0;
var losses = 0;
var userGuess = null;

var computerGuess = guessWords[Math.floor(Math.random() * guessWords.length)];
console.log(computerGuess)


document.onkeyup = function(event){
	words.push(event.key);
	var a = computerGuess.indexOf(event.key);
	console.log(a)

	for(var i=0; i)
}


