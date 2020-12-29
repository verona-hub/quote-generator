/* jshint esversion: 6 */

// Variable Declarations
const button = document.getElementById('button');
const paragraph = document.getElementById('paragraph');
const main = document.getElementById('main');

function randomQuote () {
  const allQuotes = [
    "“<span class='italics'>Whereof one cannot speak, thereof one must be silent</span>” – Ludwig Wittgenstein",
    "“<span class='italics'>He who thinks great thoughts, often makes great errors</span>” – Martin Heidegger",
    "“<span class='italics'>Happiness is not an ideal of reason but of imagination</span>” – Immanuel Kant",
    "“<span class='italics'>Even while they teach, men learn</span>” – Seneca the Younger",
    "“<span class='italics'>We are what we repeatedly do. Excellence, then, is not an act, but a habit</span>” – Aristotle",
    "“<span class='italics'>All that is necessary for the triumph of evil is that good men do nothing</span>” – John Stuart Mill",
    "“<span class='italics'>The only thing I know is that I know nothing</span>” – Socrates",
    "“<span class='italics'>We are what we pretend to be, so we must be careful about what we pretend to be.</span>” – Kurt Vonnegut",
    "“<span class='italics'>I am not young enough to know everything.</span>” – Oscar Wilde",
    "“<span class='italics'>Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.</span>” – George Orwell",
    "“<span class='italics'>A clever person solves a problem. A wise person avoids it. </span>” – Albert Einstein",
    "“<span class='italics'>He who has a why to live can bear almost any how.</span>” – Friedrich Nietzsche",
    "“<span class='italics'>A blind person who sees is better than a seeing person who is blind.</span>” – Iranian proverb"
  ];
  
  // Generates a random quote
  const random = Math.floor(Math.random() * allQuotes.length);
  paragraph.innerHTML = allQuotes[random];
  
  // Randomly changes the background
  num = Math.floor(Math.random() * 11);
  main.style.backgroundImage = `url(img/bg/${num}.jpg)`;
}


// Event listener for click on button
button.addEventListener('click', randomQuote);

// Change background and generate a random quote on ENTER or SPACE keypress
const randomOnKeypress = e => {
  e.keyCode === 13 || e.keyCode === 32 ? randomQuote() : '';
};

// Event listener on keypress
document.addEventListener('keypress', randomOnKeypress);