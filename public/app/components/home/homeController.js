angular.module('main').controller('HomeController', function($scope, $firebaseArray, $state) {

	$scope.heading = "Fresas Frescas";
	$scope.subheading = "We have the freshest berries.";

	var initSpeechRecognition = function() {
		SpeechRecognition.init();
		RoofSpeechCommands.init();
		ACSpeechCommands.init();
		WindowSpeechCommands.init();
	}

	initSpeechRecognition();

	var ref = firebase.database().ref().child("messages");

	// create a synchronized array
	$scope.messages = $firebaseArray(ref);

	// add new items to the array
	// the message is automatically added to our Firebase database!
	$scope.addMessage = function() {
		$scope.messages.$add({
			text: $scope.newMessageText
		});			
	};

});
