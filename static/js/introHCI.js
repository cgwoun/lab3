'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#testjs').click(function (e) {
		//Changes header inside of the jumbotron
		// $('.jumbotron h1').text("Javascript is connected");

		//Changes text inside the button
		var jumbotronButton = $('#testjs');
		jumbotronButton.text("Please wait...");

		//Add a CSS class
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

// function projectClick(e){
// 	console.log("Project clicked");

// 	//prevents the page from reloading
// 	e.preventDefault();

// 	//In an event handler, $(this) refers to the object that triggered the event
// 	$(this).css("background-color", "#7fff00");
// }

function projectClick(e){
	console.log('Project Clicked');
	//prevents the page from reloading
	e.preventDefault();

	//In an event handler, $(this) refers to the object that triggered the event
	var projectTitle = $(this).find('p').text();
	var jumbotronHeader = $('.jumbotron h1');
	jumbotronHeader.text(projectTitle);

	//This teaches to append changes to the original
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find('.project-description');
	var i=0;

	if(description.length == 0){
		$(containingProject).append('<div class=\'project-description\'><p>Description of the project.</p></div>');
		i = 1;
	}

	description.fadeToggle();
		//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
}