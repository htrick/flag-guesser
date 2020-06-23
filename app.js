let correctScore = 0;
let incorrectScore = 0;
const guess_div = [document.getElementById("guess-a"),
    document.getElementById("guess-b"), document.getElementById("guess-c")];
const guess_p = [document.getElementById("p-a"), document.getElementById("p-b"),
    document.getElementById("p-c")];
const flag_img = document.getElementById("flag");
const correct_span = document.getElementById("correct-score");
const incorrect_span = document.getElementById("incorrect-score");
const flags = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Costa Rica", "Cote d' Ivoire", "Croatia", "Cuba",
    "Cyprus", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "East Timor", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea-Bissau", "Guinea", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Macedonia", "Madagascar", "Malawi", "Malaysia", "Mali", "Malta",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue",
    "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama",
    "Papau New Guinea", "Paraguay", "Peru", "Poland", "Portugal", "Qatar",
    "Republic of the Congo", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
    "Serbia", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia",
    "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "The Bahamas",
    "The Central-African Republic", "The Czech Republic",
    "The Dominican Republic", "The Gambia", "The Maldives",
    "The Marshall Islands", "The Netherlands", "The Philippines",
    "The Seychelles", "The Solomom Islands", "The United Arab Emirates",
    "The United Kingdom", "The United States of America", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "Uruguay", "Uzbekistan", "Vatican City", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
let actualPosition = updateSet();

function updateSet() {
    const correct = Math.floor(Math.random() * 196);
    let otherOne = Math.floor(Math.random() * 196);
    let otherTwo = Math.floor(Math.random() * 196);
    const correctPosition = Math.floor(Math.random() * 3);
    while (otherOne === correct) {
        otherOne =Math.floor(Math.random() * 196);
    }
    while (otherTwo === correct || otherTwo === otherOne) {
        otherTwo = Math.floor(Math.random() * 196);
    }
    flag_img.src = `img/flags/${flags[correct]}.svg`;
    switch (correctPosition) {
        case 0:
            guess_p[0].innerHTML = flags[correct];
            guess_p[1].innerHTML = flags[otherOne];
            guess_p[2].innerHTML = flags[otherTwo];
            break;
        case 1:
            guess_p[0].innerHTML = flags[otherOne];
            guess_p[1].innerHTML = flags[correct];
            guess_p[2].innerHTML = flags[otherTwo];
            break;
        case 2:
            guess_p[0].innerHTML = flags[otherOne];
            guess_p[1].innerHTML = flags[otherTwo];
            guess_p[2].innerHTML = flags[correct];
            break;
    }
    return correctPosition;
}

function checkGuess(guess) {
    guess_div[actualPosition].classList.add("green-glow");
    setTimeout(() => guess_div[actualPosition].classList.remove("green-glow"),
        600);
    if (guess === actualPosition) {
        correctScore++;
        correct_span.innerHTML = correctScore;
    }
    else {
        incorrectScore++;
        incorrect_span.innerHTML = incorrectScore;
        guess_div[guess].classList.add("red-glow");
        setTimeout(() => guess_div[guess].classList.remove("red-glow"), 600);
    }
    setTimeout(() => actualPosition = updateSet(), 1000);
}

function main() {
    guess_div[0].addEventListener("click", () => checkGuess(0));
    guess_div[1].addEventListener("click", () => checkGuess(1));
    guess_div[2].addEventListener("click", () => checkGuess(2));
}

main();
