var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
// get wordsfile imports data from the url above and passes it to the callback
// function in form of the data "parameter". And eventually invokes the callback function
  $.get(wordsFile, function(data) {
  //.disabled=true disables the button after user input
    document.getElementById("btnSubmit").disabled = true; 
  // then split splits the words
  // then enables the button
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

// function checkPassword() {
//  for (x in wordsList) {
//  	console.log(x);
//  	if (x == document.getElementById("pw").innerHTML{
//  	 	document.getElementById("results").innerHTML= "weak password";
//  	}
//  }
// }

function checkPassword(){
	var y = false;
	var pw = document.getElementById("pw").value;
	for (var x = 0; x < wordsList.length; x++){
		if (wordsList[x] == pw.toLowerCase()){
			y = true;
			break;
		}
	}
	if (y== true){
	document.getElementById("results").innerHTML= "weak password"
	}
	else {
	document.getElementById("results").innerHTML= "strong password"
	}
}