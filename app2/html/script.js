const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
});
const timeStamp = new Date();

const timeString = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

document.getElementById("today").textContent = today;

function sendGreeting() {
  hour = new Date().getHours();
  console.log(hour);
  if (hour < 5) return "night";
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17) return "evening";
}
greeting = sendGreeting();
const dynamicGreeting = `Good ${greeting}, friend!`;
document.getElementById("personalgreeting").textContent = dynamicGreeting;
console.log(greeting);
setInterval(sendGreeting, 60000);

function createAccount() {
  let savedInput = document.getElementById("first-name").value;
  return savedInput;
}

document
  .getElementById("create-account")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let userInfo = createAccount();
    console.log(userInfo);
  });
