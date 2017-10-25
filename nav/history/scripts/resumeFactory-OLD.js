// **** PROFESSIONAL EXPERIENCE **** //

//job title - creating arrays of responsibilities

const kbDataMngrDuties = [
    "Oversee the data management of thirteen different research projects, simultaneously.",
    "Develop and refine data management procedures addressing all facets of company-wide data management.",
    "Evaluate processes and technologies to increase productivity and efficiency of data management team.",
    "Perform quality control audits to ensure accuracy, completeness, or proper functioning of systems and data."
];

const kbDataCoordDuties = [
    "Supervise work of data assistant, and developed their understanding of proper data management.",
    "Train staff on technical procedures and software usage.",
    "Analyze research data using appropriate statistical tools and prepare comprehensive data reports.",
    "Design and program surveys and forms for receiving, processing, or tracking data.",
    "Prepare appropriate formatting to data sets.",
];

const kbReAssistDuties = [
    "Assist research coordinators and perform data entry work as required for various projects."
];

const kbDataCollectDuties = [
    "Observed and recorded shade usage data of people at Denver parks."
];

//Job Title Objects

// Factory function that returns a job title object
const jobTitleFactory = function (title, timeFrame, duties) {
    return Object.create(null, {
        "title": { value: title, enumerable: true },
        "timeFrame": { value: timeFrame, enumerable: true },
        "duties": { value: duties, enumerable: true },
    })
}

// Create a job title objects
const kbDataMngr = jobTitleFactory('Data Manager', 'September 2015 – April 2016', kbDataMngrDuties);

const kbDataCoord = jobTitleFactory('Data Coordinator', 'May 2013 – September 2015', kbDataCoordDuties);

const kbReAssist = jobTitleFactory('Research Assistant', 'August 2012 – May 2013', kbReAssistDuties);

const kbDataCollect = jobTitleFactory('Data Collector', 'May 2012 – August 2012', kbDataCollectDuties);


/////****PREVIOUS JOB TITLE OBJECTS ******//////
// const kbDataMngr = {
//     'title' : 'Data Manager',
//     'timeFrame' : 'September 2015 – April 2016',
//     'duties' : kbDataMngrDuties
// }

// const kbDataCoord = {
//     'title' : 'Data Coordinator',
//     'timeFrame' : 'May 2013 – September 2015',
//     'duties' : kbDataCoordDuties
// }

// const kbReAssist = {
//     'title' : 'Research Assistant',
//     'timeFrame' : 'August 2012 – May 2013',
//     'duties' : kbReAssistDuties
// }

// const kbDataCollect = {
//     'title' : 'Data Collector',
//     'timeFrame' : 'August 2012 – May 2013',
//     'duties' : kbDataCollectDuties
// }

//Job Titles Array
const kbJobTitles = [];

kbJobTitles.push(kbDataMngr, kbDataCoord, kbReAssist, kbDataCollect);


//Job Positions as objects
const kleinBuendel = {
    'name' : 'Klein Buendel Inc.',
    'location' : 'Denver, CO',
    'titles' : kbJobTitles
}

//Professional Experience Array
const profExpArr = [];

profExpArr.push(kleinBuendel);



//**** EDUCATION ****//

//Degrees as objects
const wwDegree1 = {
    'degree' : 'Anthropology and Sociology',
    'concentration' : 'Global Food Systems',
    'dateAquired' : 'May 2011'
} 

const wwDegree2 = {
    'degree' : 'Environmental Studies',
    'concentration' : 'Sustainable Agriculture',
    'dateAquired' : 'May 2011'
}

//Degrees Arrays (There is probably a better, more expandable way to do this instead of having a seperate array for each college, however, im not getting anymore degrees, so it doesnt matter)
const wwDegrees = []

wwDegrees.push(wwDegree1, wwDegree2);

//Educational Establishment objects

//Educational Establishment object factory
const educationFactory = function (name, location, attended, gpa, graduated, degreeAquired, degrees) {
    return Object.create(null, {
        "name": { value: name, enumerable: true },
        "location": { value: location, enumerable: true },
        "attended": { value: attended, enumerable: true },
        "gpa": { value: gpa, enumerable: true },
        "graduated": { value: graduated, enumerable: true },
        "degreeAquired": { value: degreeAquired, enumerable: true },
        "degrees": { value: degrees, enumerable: true },
    })
}

//Create Educational Establishment objects
const warrenWilson = educationFactory('Warren Wilson College', 'Asheville, NC', 'August 2005 - May 2011', '3.84', true, true, wwDegrees);

const sunyNP = educationFactory('SUNY New Paltz', 'New Paltz, NY', 'August 2007 - January 2008', '', false, false, '');

const brentHS = educationFactory('Brentwood High School', 'Brentwood, TN', 'August 2001 - May 2005', '', true, false, '');



//OLD Educational Establishment Objects
// const warrenWilson = {
//     'name' : 'Warren Wilson College',
//     'location': 'Asheville, NC',
//     'attended': 'August 2005 - May 2011',
//     'GPA' : '3.84',
//     'graduated' : true,
//     'degree-aquired-bool' : true,
//     'degrees' : wwDegrees
// }

// const sunyNP = {
//     'name' : 'SUNY New Paltz',
//     'location': 'New Paltz, NY',
//     'attended': 'August 2007 - January 2008',
//     'GPA' : '',
//     'graduated' : false,
//     'degree-aquired-bool' : false,
//     'degrees' : wwDegrees
// }

// const brentHS = {
//     'name' : 'Brentwood High School',
//     'location': 'Brentwood, TN',
//     'attended': 'August 2001 - May 2005',
//     'GPA' : '3.9',
//     'graduated' : true,
//     'degree-aquired-bool' : false,
//     'degrees' : wwDegrees
// }

//Education Array
const educationArr = [];

educationArr.push(warrenWilson, sunyNP, brentHS);


//*** ADDITIONAL SKILLS ****//
//Additional Skills Array
const skillsArr = [
    'Expert in Microsoft Excel, with focus on advanced functions and some VBA.',
    'Proficient in Microsoft Access.',
    'Basic understanding of SQL and Microsoft SQL Server.',
    'Creating advanced questionnaires and forms in various survey creation programs.',
    'Excellent in assembling computer components, assessing and fixing any hardware issues.'
];

//*** PROFESSIONAL DEVELOPMENT ***//
//Professional Development Objects
const clinicalData = {
    'name' : 'Certificate in Data Management for Clinical Research',
    'location' : 'Coursara/Vanderbilt University',
    'date' : 'October 2013'
}

//Professional Development Array
const profDevArr = [];

profDevArr.push(clinicalData);



//Title Objects
const profExp = {
    "title" : "Professional Experience",
    "contentArray" : profExpArr
}

const education = {
    "title" : "Education",
    "contentArray" : educationArr
}

const skills = {
    "title" : "Additional Skills",
    "contentArray" : skillsArr
}

const profDev = {
    "title" : "Professional Development",
    "contentArray" : profDevArr
}






//**** RESUME ****//
const resume = [];

resume.push(profExp, education, skills, profDev);

console.log(resume);




//pushing to local storage
let resumeString = JSON.stringify(resume);
localStorage.setItem("resume", resumeString);

console.log(resumeString);