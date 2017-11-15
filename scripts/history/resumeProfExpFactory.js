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


