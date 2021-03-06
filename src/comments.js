import { getComments } from './api';
import getCommentsCount from './utills';

const dspComments = async (items) => {
  const comments = await getComments(items.id);
  document.getElementById('comments-display').innerHTML = '';
  document.getElementById('c-count').innerHTML = getCommentsCount(comments);
  comments.forEach((element) => {
    document.getElementById('comments-display').innerHTML += `${element.creation_date} ${element.username}: ${element.comment}</br>`;
  });
};

export default dspComments;