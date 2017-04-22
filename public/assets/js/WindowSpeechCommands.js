function WindowSpeechCommands() {}

WindowSpeechCommands.init = function() {
	WindowSpeechCommands.addAllWindowCommands();
	WindowSpeechCommands.addFrontWindowCommands();
	WindowSpeechCommands.addRearWindowCommands();
}

WindowSpeechCommands.addAllWindowCommands = function() {
	SpeechRecognition.addCommand({
		'Close (all) windows': function(temp) {
			console.log("close all windows");
		}
	});
	SpeechRecognition.addCommand({
		'Open (all) windows': function(temp) {
			console.log("close all windows");
		}
	});
}

WindowSpeechCommands.addFrontWindowCommands = function() {
	WindowSpeechCommands.addCloseFrontWindowCommands();
	WindowSpeechCommands.addOpenFrontWindowCommands();
}

WindowSpeechCommands.addRearWindowCommands = function() {
	WindowSpeechCommands.addCloseRearWindowCommands();
	WindowSpeechCommands.addOpenRearWindowCommands();
}

WindowSpeechCommands.addCloseFrontWindowCommands = function() {
	SpeechRecognition.addCommand({
		'Close front windows': function(temp) {
			console.log("close front windows");
		}
	});
	SpeechRecognition.addCommand({
		'Close (front) driver window': function(temp) {
			console.log("close driver window");
		}
	});
	SpeechRecognition.addCommand({
		'Close (front) passenger window': function(temp) {
			console.log("close passenger window");
		}
	});
}

WindowSpeechCommands.addOpenFrontWindowCommands = function() {
	SpeechRecognition.addCommand({
		'Open front windows': function(temp) {
			console.log("open front windows");
		}
	});
	SpeechRecognition.addCommand({
		'Open (front) driver window': function(temp) {
			console.log("open driver window");
		}
	});
	SpeechRecognition.addCommand({
		'Open (front) passenger window': function(temp) {
			console.log("open passenger window");
		}
	});
}

WindowSpeechCommands.addCloseRearWindowCommands = function() {
	SpeechRecognition.addCommand({
		'Close rear windows': function(temp) {
			console.log("close rear windows");
		}
	});
	SpeechRecognition.addCommand({
		'Close back windows': function(temp) {
			console.log("close rear windows");
		}
	});
	SpeechRecognition.addCommand({
		'Close (rear) left window': function(temp) {
			console.log("close rear left window");
		}
	});
	SpeechRecognition.addCommand({
		'Close (back) left window': function(temp) {
			console.log("close rear left window");
		}
	});
	SpeechRecognition.addCommand({
		'Close (rear) right window': function(temp) {
			console.log("close rear right window");
		}
	});
	SpeechRecognition.addCommand({
		'Close (back) right window': function(temp) {
			console.log("close rear right window");
		}
	});
}

WindowSpeechCommands.addOpenRearWindowCommands = function() {
	SpeechRecognition.addCommand({
		'Open rear windows': function(temp) {
			console.log("open rear windows");
		}
	});
	SpeechRecognition.addCommand({
		'Open back windows': function(temp) {
			console.log("open rear windows");
		}
	});
	SpeechRecognition.addCommand({
		'Open (rear) left window': function(temp) {
			console.log("open rear left window");
		}
	});
	SpeechRecognition.addCommand({
		'Open (back) left window': function(temp) {
			console.log("open rear left window");
		}
	});
	SpeechRecognition.addCommand({
		'Open (rear) right window': function(temp) {
			console.log("open rear right window");
		}
	});
	SpeechRecognition.addCommand({
		'Open (back) right window': function(temp) {
			console.log("open rear right window");
		}
	});
}
