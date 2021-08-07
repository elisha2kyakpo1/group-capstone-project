import './style.css';
import {
  postComment,
  postLikes,
} from './api';
import newApi from './rapidApi';
import dspLikes from './likes';
import dspComments from './comments';

const popup = document.querySelector('.popup-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const btnDiv = document.querySelector('.comments-div');
const commentsCount = document.getElementById('c-count');
commentsCount.classList.add('counter-comment');
const moviesCount = document.getElementById('movies-count');
const spanMovie = document.createElement('span');
moviesCount.appendChild(spanMovie);

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'none';
  overlay.classList.remove('active');
});

const clearFields = () => {
  document.querySelector('#username').value = '';
  document.querySelector('#comment_text').value = '';
};

overlay.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'none';
  overlay.classList.remove('active');
});

const display = async () => {
  const firstTitle = await newApi();

  let currentItemIndex = null;
  let currentItemId = null;

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
    likeDisplay.id = `l${ele.id}`;

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
    spanMovie.innerHTML = `(${Object.keys(ele.id).length - 1})`;

    btnLike.addEventListener('click', (e) => {
      e.preventDefault();

      const likes = { item_id: ele.id };
      postLikes(likes).then(() => {
        document.getElementById(`l${ele.id}`).innerText = parseInt(e.target.value, 10) + 1;
      });
    });

    btnComment.addEventListener('click', (e) => {
      e.preventDefault();

      currentItemIndex = index;
      currentItemId = firstTitle[index].id;

      document.getElementById('figure').src = ele.i.imageUrl;
      document.getElementById('title').innerHTML = ele.l;
      document.getElementById('description').innerHTML = ele.s;
      popup.style.display = 'block';
      overlay.classList.add('active');
      dspComments(firstTitle[index]);
    });
  });

  dspLikes(firstTitle);

  document.querySelector('.sub-comment').addEventListener('click', (e) => {
    e.preventDefault();
    const commentObj = {
      item_id: currentItemId,
      username: document.querySelector('#username').value,
      comment: document.querySelector('#comment_text').value,
    };

    postComment(commentObj).then(() => {
      dspComments(firstTitle[currentItemIndex]);
    });

    clearFields();
  });

  return firstTitle;
};
display();