/* jshint esversion: 6 */

// Variable Declarations
const quoteButton = document.getElementById('quoteButton');
const paragraph = document.getElementById('paragraph');
const body = document.getElementById('body');

function randomQuote() {
  const allQuotes = [
    " “Whereof one cannot speak, thereof one must be silent.” <span> – Ludwig Wittgenstein – </span>",
    " “He who thinks great thoughts, often makes great errors.” <span> – Martin Heidegger – </span>",
    " “Happiness is not an ideal of reason but of imagination.” <span> – Immanuel Kant – </span>",
    " “Even while they teach, men learn.” <span> – Seneca the Younger – </span>", 
    " “We are what we repeatedly do. Excellence, then, is not an act, but a habit.” <span> – Aristotle – </span>",
    " “All that is necessary for the triumph of evil is that good men do nothing.” <span> – John Stuart Mill – </span>",
    " “The only thing I know is that I know nothing.” <span> – Socrates – </span>",
    " “We are what we pretend to be, so we must be careful about what we pretend to be.” <span> – Kurt Vonnegut – </span>",
    " “I am not young enough to know everything.” <span> – Oscar Wilde – </span>",
    " “Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.” <span> – George Orwell – </span>",
    " “A clever person solves a problem. A wise person avoids it. ” <span> – Albert Einstein – </span>",
    " “He who has a why to live can bear almost any how.” <span> – Friedrich Nietzsche – </span>",
    " “A blind person who sees is better than a seeing person who is blind.” <span> – Iranian proverb – </span>"
  ];

  // Generates a random quote
  const random = Math.floor(Math.random() * allQuotes.length);
  paragraph.innerHTML = allQuotes[random];

  // Randomly changes the background
  num = Math.floor(Math.random() * 11);
  body.style.backgroundImage = `url(img/bg/${num}.jpg)`;
}

// Event listener for click on quote-button
quoteButton.addEventListener('click', randomQuote);

// Change background and generate a random quote on ENTER or SPACE keypress
const randomOnKeypress = e => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    randomQuote();
  }
};

// Event listener on keypress
document.addEventListener('keydown', randomOnKeypress);

/// NavBar
$('.menu').on('click', '.item.teal', function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active').siblings('.item').removeClass('active');
  }
});

// Remove focus on button, after click
$('button').on('mousedown', e => {
  e.preventDefault();
});