import './style.css';
import { createApp, postComment, getMeals, getComments } from './api';
import { newApi } from './rapidApi';

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const btnDiv = document.querySelector('.comments-div');
const disComment = document.querySelector('.d-comment');
const user = document.querySelector('#username').value;
const commentText = document.querySelector('#comment_text').value;

const saveComent = async () => {
  const movies = await newApi();
  movies.forEach((movie) => {
    const comment = {
      item_id: movie.id,
      username: document.querySelector('#username').value,
      comment: document.querySelector('#comment_text').value,
    }
    postComment(comment);
  });
  return movies;
};

const res = async () => {
  const data = await getComments();
  if (!data) {
    data.forEach((comments) => {
      comments
    });
  }
};

const sendComment = document.querySelector('.sub-comment');
sendComment.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(comment)
  saveComent();
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
})


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
} 

display();

