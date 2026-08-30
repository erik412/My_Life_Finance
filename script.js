const now = new Date();
const dateContainer = document.getElementById(`current-date`);
const greetingContainer = document.getElementById(`greeting`);

//Convert date to Day, Month, ##, ####
function longDate(currentDate) {
  return (formattedDate = Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(currentDate));
}

//Get time of day greeting.
function getGreeting(currentTime) {
  hour = currentTime.getHours();

  if (hour < 5) return "night";
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 21) return "evening";
  return "night";
}

//Set initial header date & greeting

let greetingPerson = "friend";
function updateHeaderGreeting(today) {
  dateContainer.textContent = longDate(now);
  greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}, ${greetingPerson}.`;
}

updateHeaderGreeting(now);

//Set intervals for date & greeting
setInterval(() => {
  const now = new Date();
  dateContainer.textContent = longDate(now);
}, 60000);

setInterval(() => {
  const now = new Date();
  const greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}, ${greetingPerson}.`;
}, 1000);

//signup form control
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

function nextStep() {
  const now = new Date();
  let firstNameField = document.getElementById("firstName");
  let lastNameField = document.getElementById("lastName");
  let firstName = firstNameField.value;
  let lastName = lastNameField.value;

  greetingPerson =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  firstName = firstName.trim().toUpperCase();

  lastName = lastName.trim().toUpperCase();
  step1.classList.add("hidden");
  step2.classList.remove("hidden");

  const greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}, ${greetingPerson}.`;
  console.log(firstName, lastName);
}
