import { getComments } from "./api"; 

export const dspComments = async (items) => {
  const commentsCount = document.getElementById('c-count');
  let commentCount = 0;
  const getComment = await getComments(items[0].id);
  getComment.forEach((element) => {
    const counterComments = commentCount + 1;
    document.getElementById('c-count').innerHTML = `Comments(${counterComments})`;
    document.getElementById('comments-display').innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
  });
};