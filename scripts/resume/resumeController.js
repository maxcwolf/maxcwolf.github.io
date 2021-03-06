// const db = require('../DatabaseJson')

//creating a function that will run the ajax request and callback function when called on the populateDOM.js
// function initResumeDomWriter () {

    // db.load(resumeDomWriter) //this holds an ajax function composed of the callback function i am passing in. It will run when this page runs

    //creating the function to be called in the db.load
    function resumeDomWriter() {
        // finding the html element to add data to below.
        const resumeElement = document.getElementById("resume_resume");

        //assigning the resume object contained in the JSON database to a variable
        const resumeDatabase = db.resume

        //building the HTML text variable to be later inserted into the DOM
        let resumeCombined = "";

        //PROFESSIONAL EXPERIENCE

        //Employer
        resumeCombined += `<section><h2>Professional Experience</h2>`;
        for (i = 0; i < resumeDatabase['Professional Experience'].length; i++)  {
            let currentProf = resumeDatabase['Professional Experience'][i];
            resumeCombined += `<h3 class='job'>${currentProf.name}</h3><h4 class=jobLocation>${currentProf.location}</h4>`;
            //Job titles
            for (j = 0; j < currentProf.titles.length; j++) {
                let currentTitle = currentProf.titles[j];
                resumeCombined += `<h4><em>${currentTitle.title}</em>  <em>${currentTitle.timeFrame}</em></h4><ul>`;
                //Job Duties
                for (k = 0; k < currentTitle.duties.length; k++) {
                    resumeCombined += `<li>${currentTitle.duties[k]}</li>`;
                }
                resumeCombined += `</ul>`;
            }
            resumeCombined += `</section>`;
        }

        //EDUCATION

        //School
        resumeCombined += `<section><h2>Education</h2>`;

        for (ii = 0; ii < resumeDatabase.Education.length; ii++)  {
            let currentSchool = resumeDatabase.Education[ii];
            //checks if I graduated and aquired a degree from the school before displaying it in the DOM
            if (currentSchool.graduated === true && currentSchool.degreeAquired === true) {
                resumeCombined += `<h3 class='school' id=school${ii+1}>${currentSchool.name}</h3><h4>${currentSchool.location}</h4>`;
                    //adds degrees under each school in education section
                    for (m = 0; m < currentSchool.degrees.length; m++) {
                        let currentDegree = currentSchool.degrees[m];
                        resumeCombined += `<p><em>${currentDegree.degreeType} in ${currentDegree.degree} </em><em>${currentDegree.dateAquired}</em></p>`
                    }
            }
            resumeCombined += `</section>`
        }


        //ADDITIONAL SKILLS
        resumeCombined += `<section><h2>Additional Skills</h2><ul>`;

        for (iii = 0; iii < resumeDatabase.Skills.length; iii++)  {
            resumeCombined += `<li>${resumeDatabase.Skills[iii]}</li>`
        }

        resumeCombined += `</ul></section>`


        // //PROFFESIONAL DEVELOPMENT
        // resumeCombined += `<section><h2>Professional Development</h2>`;

        // for (iiii = 0; iiii < resumeDatabase['Professional Development'].length; iiii++)  {

        // }

        //inserts the HTML into the DOM
        resumeElement.innerHTML += resumeCombined;

    }
// }

//exports the initResumeDomWriter function to be called in populateDOM.js
module.exports = resumeDomWriter
