import './style.css';
import {
  postComment,
  postLikes,
  createApp,
} from './api';
import { newApi } from './rapidApi';
import { dspLikes } from './likes'
import { dspComments } from './comments'

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const btnDiv = document.querySelector('.comments-div');
const sendComment = document.querySelector('.sub-comment');
// const commentDisplay = document.querySelector('.comments-display');
const commentsCount = document.getElementById('c-count');
commentsCount.classList.add('counter-comment');
const moviesCount = document.getElementById('movies-count');
const spanMovie = document.createElement('span');
moviesCount.appendChild(spanMovie);
// const allComment = document.createElement('ul');
// commentDisplay.appendChild(allComment);

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
  firstTitle.forEach((ele, index) => {
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
    likeDisplay.id = 'l' + ele.id;

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

    if (index === firstTitle.length - 1) {
      dspComments(firstTitle);
    }
    const clearFields = () => {
      document.querySelector('#username').value = '';
      document.querySelector('#comment_text').value = '';
    };

    sendComment.addEventListener('click', (e) => {
      e.preventDefault();
      const commentObj = {
        item_id: ele.id,
        username: document.querySelector('#username').value,
        comment: document.querySelector('#comment_text').value,
      }
      if (commentObj.username !== '' && commentObj.comment !== '') {
        postComment(commentObj);
        clearFields();
      }
    });

    btnLike.addEventListener('click', (e) => {
      e.preventDefault();
      const likes = { item_id: ele.id }
      postLikes(likes);
    });

    btnComment.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('figure').src = ele.i.imageUrl
      document.getElementById('title').innerHTML = ele.l;
      document.getElementById('description').innerHTML = ele.s;
      popup.style.display = 'block';
      overlay.classList.add('active');
    });

    if (index === firstTitle.length - 1) {
      dspLikes(firstTitle);
    }
  });
  return firstTitle;
}
// createApp()
display();

