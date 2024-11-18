
// Store flashcards in LocalStorage if not already stored
if (!localStorage.getItem('flashcards')) {
  localStorage.setItem('flashcards', JSON.stringify([]));
}

function addFlashcard() {
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;

  // Ensure question and answer fields are not empty
  if (question && answer) {
    const flashcards = JSON.parse(localStorage.getItem('flashcards'));
    flashcards.push({ question, answer });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    displayFlashcards();
  } else {
    alert("Please enter both question and answer.");
  }
}

// Display flashcards on the page
function displayFlashcards() {
  const flashcards = JSON.parse(localStorage.getItem('flashcards'));
  const flashcardsList = document.getElementById('flashcards-list');
  flashcardsList.innerHTML = '';

  flashcards.forEach(flashcard => {
    const div = document.createElement('div');
    div.classList.add('flashcard');
    div.innerHTML = `<strong>Q: </strong>${flashcard.question}<br><strong>A: </strong>${flashcard.answer}`;
    flashcardsList.appendChild(div);
  });
}

// Load flashcards when the page loads
window.onload = displayFlashcards;
