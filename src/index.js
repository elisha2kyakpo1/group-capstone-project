import './style.css';
import {
  createApp, postComment, getMeals, getComments,
} from './api';
import { newApi } from './rapidApi';

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const btnDiv = document.querySelector('.comments-div');

const user = document.querySelector('#username').value;
const commentText = document.querySelector('#comment_text').value;

const comment = {
  item_id: 'itemId',
  username: user,
  comment: commentText,
};

const sendComment = document.querySelector('.sub-comment');
sendComment.addEventListener('click', () => {
  console.log(comment);
  postComment(comment);
  res();
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'none';
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'none';
  overlay.classList.remove('active');
});

const res = async () => {
  const data = await getComments('itemId');
};

const display = async () => {
  const firstTitle = await newApi();
  firstTitle.forEach((ele) => {
    const btnComment = document.createElement('button');
    btnComment.classList.add('btn-save');
    btnComment.textContent = 'Comments';
    btnComment.classList.add('btn', 'btn-primary');
    const title = document.createElement('h4');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('img-div');
    const imageCont = document.createElement('div');
    const image = document.createElement('img');
    imageCont.appendChild(image);
    image.classList.add('image');
    btnDiv.appendChild(imageDiv);
    imageDiv.appendChild(imageCont);
    imageDiv.appendChild(title);
    imageDiv.appendChild(btnComment);
    title.textContent = ele.l;
    image.src = ele.i.imageUrl;

    btnComment.addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'block';
      overlay.classList.add('active');
    });
  });
  return firstTitle;
};

display();
