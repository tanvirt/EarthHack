function ACSpeechCommands() {}

ACSpeechCommands.init = function() {
	ACSpeechCommands.addBlowerCommands();
	ACSpeechCommands.addTempCommands();
}

ACSpeechCommands.addTempCommands = function() {
	ACSpeechCommands.addOverallTempCommands();
	ACSpeechCommands.addDriverTempCommands();
	ACSpeechCommands.addPassengerTempCommands();
}

ACSpeechCommands.addDriverTempCommands = function() {
	SpeechRecognition.addCommand({
		'Change (the) driver AC to *temp': function(temp) {
			console.log("driver temp: " + temp);
		}
	});
	SpeechRecognition.addCommand({
		'Increase (the) driver AC temp': function(temp) {
			console.log("increase driver temp");
		}
	});
	SpeechRecognition.addCommand({
		'Decrease (the) driver AC temp': function(temp) {
			console.log("decrease driver temp");
		}
	});
	SpeechRecognition.addCommand({
		'Lower (the) driver AC temp': function(temp) {
			console.log("decrease driver temp");
		}
	});
}

ACSpeechCommands.addPassengerTempCommands = function() {
	SpeechRecognition.addCommand({
		'Change (the) passenger AC to *temp': function(temp) {
			console.log("passenger temp: " + temp);
		}
	});
	SpeechRecognition.addCommand({
		'Increase (the) passenger AC temp': function(temp) {
			console.log("increase passenger temp");
		}
	});
	SpeechRecognition.addCommand({
		'Decrease (the) passenger AC temp': function(temp) {
			console.log("decrease passenger temp");
		}
	});
	SpeechRecognition.addCommand({
		'Lower (the) passenger AC temp': function(temp) {
			console.log("decrease passenger temp");
		}
	});
}

ACSpeechCommands.addOverallTempCommands = function() {
	SpeechRecognition.addCommand({
		'Change (my) (the) AC to *temp': function(temp) {
			console.log("temp: " + temp);
		}
	});
	SpeechRecognition.addCommand({
		'Increase (my) (the) AC temperature': function() {
			console.log("increase temp");
		}
	});
	SpeechRecognition.addCommand({
		'Decrease (my) (the) AC temperature': function() {
			console.log("decrease temp");
		}
	});
	SpeechRecognition.addCommand({
		'Lower (my) (the) AC temperature': function() {
			console.log("decrease temp");
		}
	});
}

ACSpeechCommands.addBlowerCommands = function() {
	SpeechRecognition.addCommand({
		'Change (my) (the) AC blower (level) to *speed': function(speed) {
			console.log("speed: " + speed);
		}
	});
	SpeechRecognition.addCommand({
		'Increase (my) (the) AC blower (level) (speed)': function() {
			console.log("increase AC blower");
		}
	});
	SpeechRecognition.addCommand({
		'Decrease (my) (the) AC blower (level) (speed)': function() {
			console.log("decrease AC blower");
		}
	});
	SpeechRecognition.addCommand({
		'Lower (my) (the) AC blower (level) (speed)': function() {
			console.log("decrease AC blower");
		}
	});
}
