// I originally had character as characters, and was gonna have it set up for multiple 
// cards. But, this is a one week prove and therefore and I made it one card. 
// It was all extra work, but I did enjoy myself.

const character = 
    {
        cardColor: "#0e6a29",
        imgSrc: "images/green-sea-turtle.jpg",
        imgAlt: "A green sea turtle",
        name: "Green Sea Turtle",
        nameBGColor: "#033743",
        nameColor: "#ffffff",
        family: "Cheloniidae",
        level: 1,
        health: 100,
        statsColor: "#f0f4f8",
        attackedChar: "Feed Plastic Bag",
        attackDamage: 20,
        buttonColor: "#00adb0",
        buttonHoverBGColor: "#00e339",
        buttonHoverColor: "#033743",

        attacked: function() {
            if(this.health > 0) {
                this.health -= this.attackDamage;
            }

            else {
                alert("The Green Sea Turtle is now extinct :(");
            }
        },

        levelUp: function() {
            this.level += 1;

            if(this.attackDamage > 4) {
                this.attackDamage -= 2;
            }
        }
    }
const main = document.querySelector('main');

const card = document.createElement('div');
card.className = 'card';
card.style.backgroundColor = character.cardColor;

let html = `<img class="heroImage" 
                src=${character.imgSrc} alt=${character.imgAlt}>
            <p class="name">${character.name}</p>
            <div class="stats">
                <p><strong>Family: </strong>${character.family}</p>
                <p id="levelTxt"><strong>Level: </strong>${character.level}</p>
                <p id="healthTxt"><strong>Health: </strong>${character.health}</p>
            </div>
            <div class="buttons">
                <button id="attackBtn">${character.attackedChar}</button>
                <button id="levelBtn">Level Up</button>
            </div>`

card.innerHTML = html;
main.appendChild(card);

const nameElement = card.querySelector('.name');
nameElement.style.backgroundColor = character.nameBGColor;
nameElement.style.color = character.nameColor;

const statsElement = card.querySelector('.stats');
statsElement.style.color = character.statsColor;

// Apply styling to both buttons
const buttons = card.querySelectorAll('button');
buttons.forEach(button => {
    button.style.backgroundColor = character.buttonColor;
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = character.buttonHoverBGColor;
        button.style.color = character.buttonHoverColor;
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = character.buttonColor;
        button.style.color = 'white'; // Resetting to original color
    });
});

// The consequences of me being fancy and not writing this in HTML directly
document.querySelector('#attackBtn').addEventListener("click", function() {
    character.attacked();
    const healthElement = card.querySelector("#healthTxt");
    healthElement.innerHTML = `<p id="healthTxt"><strong>Health: </strong>${character.health}</p>`;
});

document.querySelector('#levelBtn').addEventListener("click", function() {
    character.levelUp();
    const levelElement = card.querySelector("#levelTxt");
    levelElement.innerHTML = `<p id="levelTxt"><strong>Level: </strong>${character.level}</p>`;
});