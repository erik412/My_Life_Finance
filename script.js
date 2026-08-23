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
const dateContainer = document.getElementById(`current-date`);
const greetingContainer = document.getElementById(`greeting`);

function updateHeaderGreeting() {
  const now = new Date();
  dateContainer.textContent = longDate(now);
  const greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}, friend.`;
}

updateHeaderGreeting();

//Set intervals for date & greeting
setInterval(() => {
  const now = new Date();
  const greeting = getGreeting(now);
  greetingContainer.textContent = `Good ${greeting}, friend.`;
}, 1000);

setInterval(() => {
  const now = new Date();
  dateContainer.textContent = longDate(now);
}, 60000);
