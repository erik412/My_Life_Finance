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
  console.log(typeof currentTime);
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
  dateContainer.textContent = longDate(today);
  greeting = getGreeting(today);
  greetingContainer.textContent = `Good ${greeting}, ${greetingPerson}.`;
}

updateHeaderGreeting(now);

//Set intervals for date & greeting
setInterval((now) => {
  dateContainer.textContent = longDate(now);
}, 60000);

setInterval((now) => {
  const greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}, ${greetingPerson}.`;
}, 1000);

//signup form control
document.addEventListener("DOMContentLoaded", () => {
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const formHeading = document.getElementById("formHeading");
  const form = document.getElementById("multiStepSignup");
  const firstName = document.getElementById("firstNamed");
  const lastName = document.getElementById("lastName");
  const emailAddress = document.getElementById("emailAddress");
  const password = document.getElementById("password");
});

nextBtn.addEventListener("click", () => {
  let clientFirstName = firstName.value;
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
  console.log(clientFirstName);
});
