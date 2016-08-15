var name="Anuradha Ohm";
var formattedName = HTMLheaderName.replace("%data%", name);
var role=" Android Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills=["Android ","Java ","C ","C++ ","HTML ","CSS ","Javascript"];
var bio={
    "name":"Anuradha Ohm",
    "role":"Android Developer",
    "contactInfo": {
        "email":"anoo_radha@outlook.com",
        "mobile":"415-205-6988",
        "github":"https://github.com/anoo-radha/",
        "linkedIn":"anu_rad80@linkedin.com",
        "location":"Atlanta"
    },
    "URL":"images/Anu.png",
    "skills":skills
};
//$("#main").append(bio.name);
//$("#main").append(bio.role);
$("#main").append(bio.skills);
$("#main").append(bio.contactInfo);
$("#header").prepend(bio.URL);

var work={
    "position":"Android Developer",
    "employer":"Soft Tech",
    "year_worked":"2015-16",
    "city":"Remote"
};
var education={
    "name":"Bachelor of engineering- computer science",
    "school":"KSR College of Technology",
    "years_attended":"1997-2001",
    "city":"India"
}

$("#main").append("\n");
$("#main").append(work["position"]);
$("#main").append(education.name);

var work = {
    "jobs": [{
        "employer": " ",
        "title": " ",
        "location": " ",
        "dates worked": " ",
        "description": " "
    }, {
        "employer": " ",
        "title": " ",
        "location": " ",
        "dates worked": " ",
        "description": " "
    }]
};

var projects = {
    "projects": [{
        "title": " ",
        "dates": " ",
        "description": " ",
        "images": [" ", " "]
    }, {
        "title": " ",
        "dates": " ",
        "description": " ",
        "images": [" ", " "]
    }]
};
var bio={
    "name": " ",
    "role": " ",
    "welcomeMessage": " ",
    "biopic": " ",
    "contacts": {
        "mobile number": " ",
        "email address": " ",
        "github username": " ",
        "twitter handle": " ",
        "location": " "
    },
    "skills": [" ", " ", " ", " "]
};

var education={
    "schools": [{
        "name": " ",
        "location": " ",
        "degree dates": " ",
        "url": " ",
        "major": [" ", " ", " "]
    }, {
        "name": " ",
        "location": " ",
        "degree dates": " ",
        "url": " ",
        "major": [" ", " ", " "]
    }],
    "onlineCourses": [{
        "title": " ",
        "school": " ",
        "dates": " ",
        "url": " "
    }, {
        "title": " ",
        "school": " ",
        "dates": " ",
        "url": " "
    }]
};
