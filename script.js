// 1. Button that changes color when clicked
const colorBtn = document.getElementById("colorBtn");
const colors = ["#3182ce", "#38a169", "#d69e2e", "#e53e3e", "#805ad5"];
let colorIndex = 0;

colorBtn.addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  colorBtn.style.backgroundColor = colors[colorIndex];
});

// 2. Alert with greeting based on current time
const greetingBtn = document.getElementById("greetingBtn");

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning!";
  }
  if (hour >= 12 && hour < 17) {
    return "Good afternoon!";
  }
  if (hour >= 17 && hour < 21) {
    return "Good evening!";
  }
  return "Good night!";
}

greetingBtn.addEventListener("click", function () {
  alert(getGreeting());
});

// 3. Calculator that adds two numbers
const calculatorForm = document.getElementById("calculatorForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultEl = document.getElementById("result");

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    resultEl.textContent = "Please enter valid numbers.";
    return;
  }

  const sum = num1 + num2;
  resultEl.textContent = `${num1} + ${num2} = ${sum}`;
});
