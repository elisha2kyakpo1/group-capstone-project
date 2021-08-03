import './style.css';
import { createApp, postComment, getMeals, getComments } from './api';
import newApi from './rapidApi';

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const allForm = document.querySelectorAll('.btn');
const closeBtn = document.querySelector('.close');
allForm.forEach((comment) => {
  comment.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'block';
    overlay.classList.add('active');
  });
});

const user = document.querySelector('#username').value;
const commentText = document.querySelector('#comment_text').value;

const comment = {
  item_id: 'itemId',
  username: user,
  comment: commentText,
}

const sendComment = document.querySelector('.sub-comment');
sendComment.addEventListener('click', () => {
  console.log(comment)
  // postComment(comment);
  // res();
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.classList.remove('active');
})

const res = async () => {
  const data = await getComments('itemId');
};

newApi();