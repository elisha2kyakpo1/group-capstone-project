import './style.css';
import {
  postComment,
  getComments,
  postLikes,
  getLikes,
  createApp,
} from './api';
import { newApi } from './rapidApi';
import { dspLikes } from './likes'

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const btnDiv = document.querySelector('.comments-div');
const disComment = document.querySelector('.d-comment');
const commentDisplay = document.querySelector('.comments-display');
const commentsCount = document.getElementById('c-count');
const moviesCount = document.getElementById('movies-count');
const spanMovie = document.createElement('span');
const form = document.querySelector('.form');
moviesCount.appendChild(spanMovie);
const allComment = document.createElement('ul');
const sendComment = document.createElement('button');
commentDisplay.appendChild(allComment);

const hidden = () => {
  while (allComment.lastElementChild) {
    allComment.removeChild(allComment.lastElementChild);
  }
};

const responseComments = async (id) => {
  let itemCommentCount = 0;
  const data = await getComments(id);
  data.forEach((comments) => {
    itemCommentCount++;
    const listName = document.createElement('h6');
    const hr = document.createElement('hr');
    listName.classList.add('name-title');
    const listComment = document.createElement('div');
    listName.innerHTML += `Name: ${comments.username}`;
    listComment.innerHTML += `Date: ${comments.creation_date} | Comment: ${comments.comment}`;
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
  firstTitle.forEach((ele, index) => {
    const btnComment = document.createElement('button');
    const btnLike = document.createElement('button');
    btnLike.id = 'l' + ele.id
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

    responseComments(ele.id);
    const clearFields = () => {
      document.querySelector('#username').value = '';
      document.querySelector('#comment_text').value = '';
    };

    form.appendChild(sendComment)
    sendComment.classList.add('sub-comment', 'btn', 'btn-primary', 'mt-2')
    sendComment.textContent = 'Comment';

    sendComment.addEventListener('click', (e) => {
      e.preventDefault();
      const commentObj = {
        item_id: ele.id,
        username: document.querySelector('#username').value,
        comment: document.querySelector('#comment_text').value,
      }
      if (username !== '' || cooment !== '') {
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
      hidden();
      responseComments(ele.id);
      document.getElementById('figure').src = ele.i.imageUrl
      document.getElementById('title').innerHTML = ele.l;
      document.getElementById('description').innerHTML = ele.s;
      popup.style.display = 'block';
      overlay.classList.add('active');
    });

    if (index == firstTitle.length - 1) {
      dspLikes(firstTitle);
    }
  });
  return firstTitle;
}
// createApp()
display();

