
var bio = {
	"name":"Anjali Sinha",
	"role":"Software Engineer",
	"contacts": {
		"mobile":"123-456-7890",
		"email":"anjalisinha1729@gmail.com",
		"github":"https://github.com/anjali1729",
		"twitter":"None",
		"location":"Bengaluru"
	},
	"welcomeMessage":"Hello There",
	"skills":[
		"Development",
		"QA",
		"Eating",
		"Sleeping"
	],
	"blog":"Lorem ipsum dolor sit amet",
	"biopic":"images/fry.jpg"
};


bio.display = function(){
	//contactinfo
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedBlog = HTMLblog.replace("%data%",bio.blog);
	var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation + formattedBlog;
	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);
	//generalinfo
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	//skills
	$("#header").append(HTMLskillsStart);
	var formattedSkills = '';
	for(skill in bio.skills){
		formattedSkills = formattedSkills + HTMLskills.replace("%data%",bio.skills[skill]);
	}
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%",bio.skills);
	//$("")
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

}

var work = {
	"jobs" : [
		{
			"position" : "Position1",
			"employer" : "ABC Industries",
			"years" : "16th May 2014 - 20 July 2014",
			"location" : "Bengaluru",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"position" : "Position2",
			"employer" : "XYZ Industries",
			"years" : "10th July 2015 - 15th December 2015",
			"location" : "Hyderabad",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"position" : "Position3",
			"employer" : "PQR Corp.",
			"years" : "1st August 2016 - 17th April 2017",
			"location" : "Bengaluru",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}
	]
};

work.display = function(){

	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].years);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
	}

}

var projects = {
	"projects" : [
		{
			"title" : "Project1",
			"dates" : "16th May 2014 - 20 July 2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"projectURL" : "www.abc.blog.com",
			"image" : ""
		},
		{
			"title" : "Project2",
			"dates" : "1st August 2016 - 17th April 2017",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"projectURL" : "www.xyz.blog.com",
			"image" : ""
		}
	]
}

projects.display = function(){

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
	}

}

var education = {
	"schools" : [
		{
			"name" : "XYZ University",
			"location" : "Mumbai",
			"degree" : "Masters",
			"dates":"16th May 2018 - 20 July 2020",
			"url":"www.xyz.com",
			"majors":"Computer Science"
		},
		{
			"name" : "ABC University",
			"location" : "Bengaluru",
			"degree" : "Bachelors",
			"dates":"1st August 2016 - 17th April 2017",
			"url":"www.abc.com",
			"majors":"Information Technology"
		}
	]
};

education.display = function(){

	for(edu in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[edu].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates)
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
		var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedNameDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
	}

}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(full_name){
	var name = full_name.split(" ");
	var fname = name[0].substring(0,1).toUpperCase() + name[0].substring(1).toLowerCase();
	var lname = name[1].toUpperCase();
	return fname + " " + lname;
}
