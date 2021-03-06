/* jshint esversion: 6 */

// Variable Declarations
const quoteButton = document.getElementById('quoteButton');
const paragraph = document.getElementById('paragraph');
const mainImage = document.getElementById('main-image');

// Default background image
mainImage.style.backgroundImage = `url(img/bg/8.jpg)`;

// Quotes collection
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
  $(paragraph).fadeOut(1200, function() {
    const random = Math.floor(Math.random() * allQuotes.length);
    // Displays the random quote inside the paragraph
    paragraph.innerHTML = allQuotes[random];
    $(paragraph).fadeIn(2000);

  });

  const num = Math.floor(Math.random() * 20);

  // Generates a random background image
  $(mainImage).fadeOut(1600, function() {
    $(mainImage)
      .css('background-image', 'url(' + `img/bg/${num}.jpg` + ')')
      .fadeIn(1000);
  });

  // Button disappears and reappears
  $(quoteButton).fadeOut(1200, function() {
    $(quoteButton).fadeIn(600);
  });



  /// End of function /// 
}



// Event listener for click on button
quoteButton.addEventListener('click', randomQuote);

// Change background and generate a random quote on ENTER or SPACE keypress
const randomOnKeypress = e => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    randomQuote();
  }
};

// Event listener on keypress
document.addEventListener('keydown', randomOnKeypress);

/// NavBar, set active class on click
/*$('.menu').on('click', '.item.teal', function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active').siblings('.item').removeClass('active');
  }
});*/

// Remove focus on button, after click
$('button').on('mousedown', e => {
  e.preventDefault();
});