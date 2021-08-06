export const dspComments = async (item_id) => {
  const getComment = await getComments(`../test.json${item_id}`);
  console.log(getComment)
  const myData = getComment.json()
  console.log(myData)
  myData.forEach((element) => {
    const counterComments = element.comment.length;
    return counterComments;
  });
  return myData;
};