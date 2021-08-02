import './style.css';

const popup = document.querySelector('.popup-form');
const commentsForm = document.querySelectorAll('.btn');
const closeComment = document.querySelector('.close');
commentsForm.forEach((comment) => {
  comment.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'block';
  });
});

closeComment.addEventListener('click', () => {
  popup.style.display = 'none'; 
});