import getCommentsCount from '../utills';

const mockComments = [
  {
    item_id: 'txvcfrt',
    username: 'Mwimwi',
    comment: 'Some comment here',
  },
];

test('Should return total number of comments', () => {
  expect(getCommentsCount(mockComments)).toBe(mockComments.length);
});