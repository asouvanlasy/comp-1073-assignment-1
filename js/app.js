// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

const nouns = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"]; 
const verbs = ["sat on","ate","danced with","saw","doesn't like","kissed"];
const adjectives = ["a funny","a scary","a goofy","a slimy","a barking","a fat"]
const animals = ["goat","monkey","fish","cow","frog","bug","worm"];
const places = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
