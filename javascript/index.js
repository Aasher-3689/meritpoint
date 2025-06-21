/*
array of arrays of:
     0. university name to show
     1. its html merit-calculator file-name
*/

const universities = [
    ["NUST - National University of Science and Technology, Islamabad", "nust"],
    ["QAU - Quaid-i-Azam University, Islamabad", "qau"],
    ["PIEAS - Pakistan Institute of Engineering and Applied Sciences, Islamabad", "pieas"],
    ["IIU - International Islamic University, Islamabad", "iiu"],
    ["CUI - COMSATS University, Islamabad", "cui"],
    ["NUML - National University of Modern Languages, Islamabad", "numl"],
    ["GCU - Government College University, Lahore", "gcu"],
    ["FAST NUCES - National University of Computer and Emerging Sciences", "fast-nuces"],
    ["PU - University of the Punjab, Lahore", "pu"],
    ["UET - University of Engineering and Technology, Lahore", "uet"],
    ["UVAS - University of Veterinary and Animal Sciences, Lahore", "uvas"],
    ["UAF - University of Agriculture, Faisalabad", "uaf"],
    ["GCUF - Government College University, Faisalabad", "gcuf"],
    ["UL - University of Layyah", "ul"]
];

/*
adding universities to html <a>
*/
const main = document.getElementById("main");
function showUniversities() {
    main.innerHTML = "";
    for (const [university, path] of universities) {
        const newA = document.createElement("a");
        newA.textContent = university;
        newA.href = `./merit-calculators/${path}.html`;
        main.appendChild(newA);
    }
};
showUniversities();

/*
Filtering universities according to search term in html <input>
*/
const search = document.getElementById("search");
search.addEventListener("input", () => {
    const input = (search.value).toLowerCase().trim();
    if (input === "") {
        showUniversities();
    } else {
        const filteredUnis = universities.filter(university => {
            uniTerms = university[0].toLowerCase().split(/\s+/);
            inputTerms = input.split(/\s+/);
            return inputTerms.every(inputTerm =>
                uniTerms.some(uniTerm => uniTerm.includes(inputTerm))
            );
        });

        main.innerHTML = "";
        for (const [university, path] of filteredUnis) {
            const newA = document.createElement("a");
            newA.textContent = university;
            newA.href = `./merit-calculators/${path}.html`;
            main.appendChild(newA);
        }
    }
});
