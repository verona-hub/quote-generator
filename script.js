/* jshint esversion: 6 */

// Variable Declarations
const quoteButton = document.getElementById('quoteButton');
const paragraph = document.getElementById('paragraph');
const mainImage = document.getElementById('main-image');

// Default background image
mainImage.style.backgroundImage = `url(img/bg/8.jpg)`;

// Random quote function
randomQuote = () => {

  // Quotes collection
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

  // Generate a random quote
  $(paragraph).fadeOut(800, () => {
    const random = Math.floor(Math.random() * allQuotes.length);
    // Display the random quote inside the paragraph
    paragraph.innerHTML = allQuotes[random];
    $(paragraph).fadeIn(1600);
  });

  /// End of function /// 
};

// Function that generates a random background image
const randomBackground = () => {
  $(mainImage).fadeOut(1200, () => {
    const num = Math.floor(Math.random() * 20);

    $(mainImage)
      .css('background-image', 'url(' + `img/bg/${num}.jpg` + ')')
      .fadeIn(600);
  });
};

// Function that animates the button
const buttonAnimation = () => {
  setTimeout(() => {
    quoteButton.style.visibility = 'hidden';
  }, 400);

  setTimeout(() => {
    quoteButton.style.visibility = 'visible';
  }, 1200);
};

// Main function that: 
// a) generates a random quote, 
// b) changes the background,
// c) animates the button 
const launch = () => {
  randomQuote();
  randomBackground();
  buttonAnimation();
};

// Fire the main function on button click
quoteButton.addEventListener('click', () => {
  launch();
  // Remove the focus from the button after it was clicked
  e.preventDefault();
});

// Fire the main function if ENTER or SPACE are pressed on the keyboard
document.addEventListener('keydown', e => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    launch();
  }
});