import { getLikes } from "./api"; 

export const dspLikes = async (items) => {
  const getLike = await getLikes(items[0].id);
  getLike.forEach((element) => {
    document.getElementById('l'+element.item_id).innerHTML += element.likes || 0;
  });
};