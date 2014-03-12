var process = {

startprocess: function() {
	var textarea = document.getElementById("textbox");
	chrome.storage.local.get('value', function(result){
		var output = JSON.stringify(result)
		var lastcharacter = output.length - 2;
		output = output.substring(10,lastcharacter);
		textarea.innerHTML = output;
	});
  },

stopprocess: function () {
	var textarea = document.getElementById("textbox");
	if(textarea.innerHTML.indexOf("&lt;list&gt;") != -1){
		textarea.innerHTML = textarea.innerHTML.replace("&lt;list&gt;", "<ol><li></li></ol>");
	}
	chrome.storage.local.set({'value': textarea.innerHTML},function(){});
    }

};

document.addEventListener('DOMContentLoaded', function () {
  process.startprocess();
document.getElementById("textbox").onkeyup = function(){
	process.stopprocess();
};
});