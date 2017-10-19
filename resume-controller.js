// get database from local storage
const storedResume = JSON.parse(localStorage.getItem("resume"));

// finding the html element to add data to below. 
const resumeElement = document.getElementById("resume");

console.log(storedResume);

let resumeCombined = "";

for (i = 0; i < resume.length; i++)  {
    //headings of each section of the resume
    
    let currentSection = resume[i];

    resumeCombined += `<section><h2>${resume[i].title}</h2>`;

    //lists additional skills
    if (currentSection.title === "Additional Skills") {
        resumeCombined += `<ul>`;
        for (n = 0; n < currentSection.contentArray.length; n++) {
            resumeCombined += `<li>${currentSection.contentArray[n]}</li>`;
        }
        resumeCombined += `</ul>`;
    }
    //gets the name of the objects within each section(ie job name, school name, profesional dev course name)
    for (j = 0; j < currentSection.contentArray.length; j++) {
        let currentObject = resume[i].contentArray[j];
        
        //subheading for each section
        if (currentObject.name != undefined) {   //if the current object doesnt have an object with a name key, then dont add the h3 title
            resumeCombined += `<h3>${currentObject.name}</h3>`;  
        } 
        //displays location under subheading
        if (currentObject.location != undefined) {
            resumeCombined += `<h4>${currentObject.location}</h4>`;
        }

        //professional experience jobs section
        if (currentObject.titles != undefined) { //if the current object has a value of titles, then add the job title and timeframe
            for (k = 0; k < currentObject.titles.length; k++)  {
                let currentJob = currentObject.titles[k];
                resumeCombined += `
                <h4><em>${currentJob.title} </em><em>${currentJob.timeFrame}</em></h4>
                <ul>
                `
                for (l = 0; l < currentJob.duties.length; l++)  { //adds the job duties
                    resumeCombined += `<li>${currentJob.duties[l]}</li>` 
                }
                resumeCombined += `</ul>`   
            }
        }
        //adds degrees under each school in education section
        if (currentObject.graduated === true && currentObject.degreeAquired === true)  {
            for (m = 0; m < currentObject.degrees.length; m++) {
                let currentDegree = currentObject.degrees[m];
                resumeCombined += `
                <p><em>Bachelor of Arts in ${currentDegree.degree} </em><em>${currentDegree.dateAquired}</em></p>
                `
            }
        }
    }
    resumeCombined += `</section>`;    
}

resumeElement.innerHTML += resumeCombined;


console.log(resumeCombined);