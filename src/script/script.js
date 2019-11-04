var dots = document.getElementById("dots");
var mlText = document.getElementById("more--less");
var changeText = document.getElementById("change");

changeText.addEventListener("click", function(){

	if (dots.style.display === "none") {

		dots.style.display = "inline";
		changeText.innerHTML = "More +"; 
		mlText.style.display = "none";

	} else {

		dots.style.display = "none";
		changeText.innerHTML = "Less -"; 
		mlText.style.display = "inline";

	}

})
