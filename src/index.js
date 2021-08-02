import './style.css';

const reserve = document.querySelector('.reserve-form');
const comments = document.querySelector('.comments-form');
const commentsForm = document.querySelectorAll('.btn');
const closeComment = document.querySelector('.close');
commentsForm.forEach((comment) => {
  comment.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('opinion')) {
      comments.style.display = 'block';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else if (e.target.classList.contains('reserve')) {
      reserve.style.display = 'block';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
  });
});
closeComment.addEventListener('click', () => {
    comments.style.display = 'none'; 
    reserve.style.display = 'none';
    
});