const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        unselectbutton();
        unselectcharacter();

        button.classList.add("selected");
        characters[index].classList.add("selected");
    });
});

function unselectcharacter() {
    const buttonselected = document.querySelector(".character.selected");
    buttonselected.classList.remove("selected");
}

function unselectbutton() {
    const buttonselected = document.querySelector(".button.selected");
    buttonselected.classList.remove("selected");
}