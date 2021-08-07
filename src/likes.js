import { getLikes } from './api';

const dspLikes = async (items) => {
  const getLike = await getLikes(items[0].id);
  getLike.forEach((element) => {
    const like = document.getElementById(`l${element.item_id}`)
    like.parentElement.value = element.likes
    like.innerText += element.likes || 0;
  });
};

export default dspLikes;