// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
// Buttons
var Button1 = document.querySelector('.btn1');
var Button2 = document.querySelector('.btn2');
var Button3 = document.querySelector('.btn3');
var Button4 = document.querySelector('.btn4');
var Button5 = document.querySelector('.btn5');
var speakButton = document.querySelector('.speakBtn');
var Button6 = document.querySelector('.btn6');
var Button7 = document.querySelector('.btn7');

const nouns = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"]; 
const verbs = ["sat on","ate","danced with","saw","doesn't like","kissed"];
const adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"]
const animals = ["goat","monkey","fish","cow","frog","bug","worm"];
const places = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

// Array to hold generated sentence
let sentence = ["","","","",""];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function selectWord(array, int) {
	// Get a random value between 0 and the array length
	var random = Math.floor(Math.random() * array.length);
	// Use the random value to select a word, and add the word to the correct part of the main sentence
	sentence[int] = array[random];
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	// Properly convert the sentence array into a single string
	textToSpeak = "";
	for(let i=0; i < 5; i++){
		textToSpeak += sentence[i];
		textToSpeak += " ";
	}
	speakNow(textToSpeak);
	// output the story to the user as text as it is being spoken
	document.querySelector('.storyText').innerHTML = textToSpeak;
}
// Click events for each button, each with it's own corresponding array of words
// When pressed, each button sets a different part of the sentence to random word
Button1.onclick = function() {
	selectWord(nouns, 0);
}
Button2.onclick = function() {
	selectWord(verbs, 1);
}
Button3.onclick = function() {
	selectWord(adjectives, 2);
}
Button4.onclick = function() {
	selectWord(animals, 3);
}
Button5.onclick = function() {
	selectWord(places, 4);
}
// Button6 sets every part of the sentence to a random word
Button6.onclick = function() {
	selectWord(nouns, 0);
	selectWord(verbs, 1);
	selectWord(adjectives, 2);
	selectWord(animals, 3);
	selectWord(places, 4);
}
// Button7 resets the sentence back to an empty array
Button7.onclick = function() {
	sentence = ["","","","",""];
}