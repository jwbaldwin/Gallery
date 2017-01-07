jQuery(document).ready(function(event){
	var projectsContainer = $('.cd-projects-container'),
		navigation = $('.cd-primary-nav'),
		triggerNav = $('.cd-nav-trigger'),
		logo = $('.cd-logo');
	
	triggerNav.on('click', function(){
		if( triggerNav.hasClass('project-open') ) {
			//close project
			projectsContainer.removeClass('project-open').find('.selected').removeClass('selected').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$(this).children('.cd-project-info').scrollTop(0).removeClass('has-boxshadow');

			});
			triggerNav.add(logo).removeClass('project-open');
		} else {
			//trigger navigation visibility
			triggerNav.add(projectsContainer).add(navigation).toggleClass('nav-open');
		}
	});

	projectsContainer.on('click', '.single-project', function(){
		var selectedProject = $(this);
		if( projectsContainer.hasClass('nav-open') ) {
			//close navigation
			triggerNav.add(projectsContainer).add(navigation).removeClass('nav-open');
		} else {
			//open project
			selectedProject.addClass('selected');
			projectsContainer.add(triggerNav).add(logo).addClass('project-open');
		}
	});

	projectsContainer.on('click', '.cd-scroll', function(){
		//scroll down when clicking on the .cd-scroll arrow
		var visibleProjectContent =  projectsContainer.find('.selected').children('.cd-project-info'),
			windowHeight = $(window).height();

		visibleProjectContent.animate({'scrollTop': windowHeight}, 300); 
	});

	//add/remove the .has-boxshadow to the project content while scrolling 
	var scrolling = false;
	projectsContainer.find('.cd-project-info').on('scroll', function(){
		if( !scrolling ) {
		 	(!window.requestAnimationFrame) ? setTimeout(updateProjectContent, 300) : window.requestAnimationFrame(updateProjectContent);
		 	scrolling = true;
		}
	});

	function updateProjectContent() {
		var visibleProject = projectsContainer.find('.selected').children('.cd-project-info'),
			scrollTop = visibleProject.scrollTop();
		( scrollTop > 0 ) ? visibleProject.addClass('has-boxshadow') : visibleProject.removeClass('has-boxshadow');
		scrolling = false;
	}

	//Add prject button
	/*$('#add-icon').click(function() {
	    $(".cd-projects-container ul").append(
	    	'<li class="single-project"><div class="cd-title"><h2>Name</h2></div><div class="cd-project-info"><button class="cd-scroll">Scroll down</button><div class="content-wrapper"><div class="grid"><div class="grid-item"></div></div><button class="image-upload">Dump Some Images</button><form action="/upload-target" class="dropzone" style="display: none;"></form></div></li>'
		);
	});*/

});

$(window).load(function(){
   $('.grid').masonry({
   // options
   itemSelector: '.grid-item',
   columnWidth: 200
 });
 var elem = document.querySelector('.grid');
 var msnry = new Masonry(elem, {
   // options
   itemSelector: '.grid-item',
   columnWidth: 200
 });

 // element argument can be a selector string
 //   for an individual element
 var msnry = new Masonry('.grid', {
   // options
 });  
});

//Dropzone button
$(".image-upload").click(function() { $(".dropzone").show(); });