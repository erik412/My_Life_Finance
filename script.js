const dateContainer = document.getElementById(`current-date`);
const greetingContainer = document.getElementById(`greeting`);

//Convert date to Day, Month, ##, ####
function longDate() {
  now = new Date();
  return (formattedDate = Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(now));
}

//Get time of day greeting.
function getGreeting() {
  currentTime = new Date();
  hour = currentTime.getHours(now);
  if (hour < 5) return "night";
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 21) return "evening";
  return "night";
}

//Set initial header date & greeting
function updateHeaderGreeting() {
  now = new Date();
  dateContainer.textContent = longDate(now);
  greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}.`;
}

updateHeaderGreeting();

//Set intervals for date & greeting
setInterval(() => {
  now = new Date();
  dateContainer.textContent = longDate(now);
}, 60000);

setInterval(() => {
  now = new Date();
  const greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}.`;
}, 1000);

//signup form control
document.addEventListener("DOMContentLoaded", () => {
  let userData = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: ""
  }
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const formHeading = document.getElementById("formHeading");
  const form = document.getElementById("multiStepSignup");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailAddress = document.getElementById("emailAddress");
  const password = document.getElementById("password");
  const createAccount = document.getElementById('createAccount')


  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      userData.firstName = firstName.value.replace(/\s+/g, '').toUpperCase();
      userData.lastName = lastName.value.replace(/\s+/g, '').toUpperCase();
      step1.classList.add("hidden");
      step2.classList.remove("hidden");
      //handleNextBtn(userData)
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      step2.classList.add("hidden");
      step1.classList.remove("hidden");
    });
  }  

  if (createAccount){
  createAccount.addEventListener('click', ()=> {
    userData.emailAddress = emailAddress.value.replace(/\s+/g, '').toUpperCase();
    userData.password = password.value.replace(/\s+/g, '');
    handleCreateAccountBtn(userData)
  })
  }
});


function handleCreateAccountBtn(user){
  console.log(`${user.firstName} ${user.lastName}`)
  console.log(`${user.emailAddress} ${user.password}`)
}

