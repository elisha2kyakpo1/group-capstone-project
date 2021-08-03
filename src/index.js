import './style.css';
import { createApp } from './api';

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

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.classList.remove('active');
})

createApp()