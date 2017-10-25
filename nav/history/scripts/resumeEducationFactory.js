//**** EDUCATION ****//

//Degrees as objects
const wwDegree1 = {
    'degree' : 'Anthropology and Sociology',
    'concentration' : 'Global Food Systems',
    'dateAquired' : 'May 2011',
    'degreeType' : 'Bachelor of Arts'
} 

const wwDegree2 = {
    'degree' : 'Environmental Studies',
    'concentration' : 'Sustainable Agriculture',
    'dateAquired' : 'May 2011',
    'degreeType' : 'Bachelor of Arts'
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
