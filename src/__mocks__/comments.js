const dspComments = async (items) => {
  let commentCount = 0;
  const getComment = await getComments(items.id);
  return commentCount = getComment.length || 0;
};

export default dspComments;