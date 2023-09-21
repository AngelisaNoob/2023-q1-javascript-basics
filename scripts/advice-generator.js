let btn = document.getElementById("advice-button")
let output = document.getElementById("advice")

let advisors = [
	"A wise man once told me",
	"Mother always says",
	"My Uncle Rupert once said",
];

let howOften = ["never", "always", "as often as you can", "never ever"];

let verbs = ["run with", "swim in", "eat", "climb", "dance with"];

let adjectives = ["spiky", "furry", "funny", "spicy", "odd", "loud", "scary"];

let nouns = [
	"elephants",
	"humans",
	"chainsaws",
	"nuclear bombs",
	"computers",
	"commuters",
	"video games",
];

let getRandomIndex = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
}

let getRandomWord = function (a){
	return a[getRandomIndex(a)];
	console.log(
		getRandomWord(a), 
		generateAdvice(h),
		getRandomAdvice(v),
		getRandomAdvice(adj),
		getRandomAdvice(n)
	);
};



let generateAdvice = function(a, h, v, adj, n){

};
generateAdvice(advisors, howOften, verbs, adjectives, nouns);
//let rand = Math.floor(Math.random() * advisors.length);
let rand = Math.floor(Math.random() * advisors.length);

let randAdvisor = advisors[rand];

rand = Math.floor(Math.random() * howOften.length)
let randHowOften = howOften[rand];


console.log(randAdvisor, randHowOften);

rand = Math.floor(Math.random() * adjectives.length);
let randVerb = verbs[rand];

rand = Math.floor(Math.random() * nouns.length)
let randNouns = nouns[rand];

let randAdjectives = adjectives[rand];

console.log(randAdvisor, randHowOften, randVerb, rAdjectives, randNouns);

let advisors = [
	"A wise man once told me",
	"Mother always says",
	"My Uncle Rupert once said",
];

let howOften = ["never", "always", "as often as you can", "never ever"];

let verbs = ["run with", "swim in", "eat", "climb", "dance with"];

let adjectives = ["spiky", "furry", "funny", "spicy", "odd", "loud", "scary"];

let nouns = [
	"elephants",
	"humans",
	"chainsaws",
	"nuclear bombs",
	"computers",
	"commuters",
	"video games",
];