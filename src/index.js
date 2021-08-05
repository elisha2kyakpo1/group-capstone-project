import './style.css';
import {
  createApp,
  postComment,
  getComments,
  getLikes,
  postLikes
} from './api';
import { newApi } from './rapidApi';

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const btnDiv = document.querySelector('.comments-div');
const disComment = document.querySelector('.d-comment');
const commentsCount = document.getElementById('c-count');
const moviesCount = document.getElementById('movies-count');
const spanMovie = document.createElement('span');
moviesCount.appendChild(spanMovie);

const res = async (id) => {
  let itemCommentCount = 0;
  const data = await getComments(id);
  const allComment = document.createElement('ul');
  data.forEach((comments) => {
    itemCommentCount++;
    disComment.appendChild(allComment);
    const listName = document.createElement('h6');
    const hr = document.createElement('hr');
    listName.classList.add('name-title');
    const listComment = document.createElement('div');
    listName.innerHTML = `Name: ${comments.username}`;
    listComment.innerHTML=  `Date: ${comments.creation_date} | Comment: ${comments.comment}`;
    commentsCount.innerHTML = `Comments (${itemCommentCount})`;
    allComment.appendChild(hr);
    allComment.appendChild(listName);
    allComment.appendChild(listComment);
  });
};

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
    const btnLike = document.createElement('button');
    btnLike.textContent = 'like';
    btnLike.classList.add('like-btn');
    btnComment.classList.add('btn-save');
    btnComment.textContent = 'Comments';
    btnComment.classList.add('btn', 'btn-primary');
    const title = document.createElement('h4');
    const imageDiv = document.createElement('div');
    const likeCont = document.createElement('div');
    const likeDisplay = document.createElement('span');
    btnLike.appendChild(likeDisplay);
    likeCont.classList.add('like-div');
    likeCont.appendChild(btnLike);
    imageDiv.classList.add('img-div');
    const imageCont = document.createElement('div');
    const image = document.createElement('img');
    imageCont.appendChild(image);
    image.classList.add('image');
    btnDiv.appendChild(imageDiv);
    imageDiv.appendChild(imageCont);
    imageDiv.appendChild(title);
    imageDiv.appendChild(likeCont);
    imageDiv.appendChild(btnComment);
    title.textContent = ele.l;
    image.src = ele.i.imageUrl;
    spanMovie.innerHTML = `(${Object.keys(ele.id).length - 1})`
    
    const clearFields = () => {
      document.querySelector('#username').value = '';
      document.querySelector('#comment_text').value = '';
    };

    const sendComment = document.querySelector('.sub-comment');
    sendComment.addEventListener('click', (e) => {
      e.preventDefault();
      const comment = {
        item_id: ele.id,
        username: document.querySelector('#username').value,
        comment: document.querySelector('#comment_text').value,
      }
      postComment(comment);
      clearFields();
    });

    let counter_like = 0;
    btnLike.addEventListener('click', (e) => {
      e.preventDefault();
      counter_like++;
      likeDisplay.innerHTML = counter_like;
    });

    btnComment.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('figure').src = ele.i.imageUrl
      document.getElementById('title').innerHTML = ele.l;
      document.getElementById('description').innerHTML = ele.s;
      res(ele.id);    
      popup.style.display = 'block';
      overlay.classList.add('active');
    });
  });
  return firstTitle;
} 

display();

