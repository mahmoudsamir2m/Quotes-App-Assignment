const quotes = [
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Stay hungry. Stay foolish. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best way to predict your future is to create it. - Abraham Lincoln",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
];

const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

let lastQuote = null;
function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (quotes[randomIndex] === lastQuote);

  lastQuote = quotes[randomIndex];
  return lastQuote;
}
quoteButton.addEventListener("click", () => {
  quoteText.classList.add("fade");

  setTimeout(() => {
    const newQuote = getRandomQuote();
    quoteText.textContent = `"${newQuote}"`;
    quoteText.classList.remove("fade");
  }, 300);
});

// Another solution

// function getRandomQuote(quotes, excludedQuote) {
//   const filteredQuotes =quotes.filter((quote)=>quote!==excludedQuote)
//   const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
//   return filteredQuotes[randomIndex]
// }

// quoteButton.addEventListener("click", () => {
//   quoteText.classList.add("fade");
//   quoteButton.disabled = true;
//   setTimeout(() => {
//     const newQuote = getRandomQuote(quotes,quoteText.textContent);
//     quoteText.textContent = newQuote;
//     quoteText.classList.remove("fade");
//     quoteButton.disabled = false;
//   }, 300);
// });
