//**** RESUME ****//

//creating resume database object
const resumeDatabase = {
    'Professional Experience' : profExpArr,
    'Education' : educationArr,
    'Skills' : skillsArr,
    'Professional Development' : profDevArr
}

    
console.log(resumeDatabase['Professional Experience'].length);






//pushing to local storage
let resumeString = JSON.stringify(resumeDatabase);
localStorage.setItem("resume", resumeString);

console.log(resumeString);