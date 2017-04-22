function ACSpeechCommands() {}

ACSpeechCommands.init = function() {
	SpeechRecognition.addCommand({
		'Change AC blower level to *speed': function(speed) {
			console.log("speed: " + speed);
		}
	});
	SpeechRecognition.addCommand({
		'Change driver AC to *temp': function(temp) {
			console.log("driver temp: " + temperature);
		}
	});
	SpeechRecognition.addCommand({
		'Change passenger AC to *temp': function(temp) {
			console.log("passenger temp: " + temp);
		}
	});
}
