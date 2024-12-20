const containerLength = 600;
const container = document.querySelector("#container");

container.style.height = `${containerLength}px`;
container.style.width = `${containerLength}px`;
container.style.marginTop = "20px";
container.style.border = "1px solid black";

generateGrid(16);
initializeResetBtn();

function initializeResetBtn() {
    const resetBtn = document.querySelector("#reset-button");

    resetBtn.textContent = "Select new grid size";
    resetBtn.style.backgroundColor = "white";
    resetBtn.style.marginTop = "20px";
    resetBtn.style.padding = "3px 15px";
    resetBtn.style.borderRadius = "7px";

    resetBtn.addEventListener("mouseenter", () => {
        resetBtn.style.backgroundColor = "grey";
    });

    resetBtn.addEventListener("mouseleave", () => {
        resetBtn.style.backgroundColor = "white";
    });

    resetBtn.addEventListener("click", function(event) {
        const userChoice = prompt("Select a grid size between 1 & 100");
        if (userChoice && (+userChoice <= 100 && +userChoice > 0)) {
            removeChildren(container);
            generateGrid(+userChoice);
        }
    });
}

function generateGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        const squareLength = container.clientHeight / squaresPerSide;
        
        square.style.width = `${squareLength}px`;
        square.style.height = `${squareLength}px`;
        square.style.margin = 0;
        square.style.padding = 0;
        square.style.opacity = "0.1";

        square.addEventListener("mouseover", function(event) {
            const randomHexColor = getRandomHexColor();
            square.style.backgroundColor = randomHexColor;
            square.style.opacity = `${+square.style.opacity + 0.1}`;
        });

        container.appendChild(square);
    }
}

function removeChildren(elem) {
    let child = elem.lastElementChild;

    while (child) {
        elem.removeChild(child);
        child = elem.lastElementChild;
    }
}

function getRandomHexColor() {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    let hexString = "#";
    
    for (let i = 0; i < 6; i++) {
        const randomHexValue = Math.floor(Math.random() * 16);
        hexString += hexValues[randomHexValue];
    }

    return hexString;
}
