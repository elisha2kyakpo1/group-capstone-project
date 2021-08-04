import './style.css';
import {
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
const user = document.querySelector('#username').value;
const commentText = document.querySelector('#comment_text').value;

const res = async (id) => {
  const data = await getComments(id);
  if (!data) {
    data.forEach((comments) => {
      const allComment = document.createElement('ul');
      disComment.appendChild(allComment);
      const listComment = document.createElement('li');
      listComment.textContent = `${comments.username}`;
      listComment.textContent = `${comments.comment}`;
      allComment.appendChild(listComment);
    });
  }
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

    res(ele.id);
    const comment = {
      item_id: ele.id,
      username: document.querySelector('#username').value,
      comment: document.querySelector('#comment_text').value,
    }

    const sendComment = document.querySelector('.sub-comment');
    sendComment.addEventListener('click', (e) => {
      e.preventDefault();
      postComment(comment);
    });

    let counter_like = 0;
    btnLike.addEventListener('click', (e) => {
      e.preventDefault();
      counter_like++;
      likeDisplay.innerHTML = counter_like;
    });

    btnComment.addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'block';
      overlay.classList.add('active');
    });
  });
  return firstTitle;
} 

display();

