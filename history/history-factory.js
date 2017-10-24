const history = ["In college, I never thought I would want to go into computer programming. I studied Anthropology and Sustainable Agricultural Systems at a tiny liberal arts college in the mountains of North Carolina. However, when I started working as a research assistant at a public health communications research firm after college, I discovered that I like talking to computers a bit more than people. My supervisors noticed this, and after excelling on the computer-side of some research projects by building Access and Excel forms that helped streamline the lead investigators organize their findings, I was transferred to the data department as a data coordinator rather than staying in the research focused career path. There I became passionate about using my makeshift, self-taught and rudimentary programming skills to solve problems in managing the data for the dozens of company-wide research projects.",  "I was almost completely self-taught by using Google and various web and print resources. Even with this handicap I became skilled enough at my job to later become the Data Manager for the entire firm. At this point, I had no prospects for advancement in the company as I was already in the highest position on the data team. After experiencing work in a field I was unexpectedly thrown into, I wanted to delve into a field where I could grow from the ground up. I’m the kind of person who needs to be constantly stimulated with new learning opportunities to thrive; I’m an excellent student, but without a teacher I became uninterested in continuing in the field of research data management. I started looking into other careers where I could continue to learn and grow."];

//pushing to local storage
let historyString = JSON.stringify(history);
localStorage.setItem("history", historyString);
