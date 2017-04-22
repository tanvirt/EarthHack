function RoofSpeechCommands() {}

RoofSpeechCommands.init = function() {
	SpeechRecognition.addCommand({
		'Open roof': function() {
			console.log("open roof");
		}
	});
	SpeechRecognition.addCommand({
		'Close roof': function() {
			console.log("close roof");
		}
	});
}
