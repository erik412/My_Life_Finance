const nextButton = document.getElementById("next-page");

function nextPage(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;

    console.log(`Hello, ${firstName} ${lastName}.`);
}

nextButton.addEventListener("click", nextPage);