import display from '../__mocks__/itemsCount.js';

describe('Testing Asynchronous Code', () => {
  const mockItems = [
    {
      item_id: 'txvcfrt',
      username: 'Mwimwi',
      comment: 'Some comment here',
    },
    {
      item_id: 'txvcfrt',
      username: 'Mwimwi',
      comment: 'Some comment here',
    },
    {
      item_id: 'txvcfrt',
      username: 'Mwimwi',
      comment: 'Some comment here',
    },
    {
      item_id: 'txvcfrt',
      username: 'Mwimwi',
      comment: 'Some comment here',
    },
    {
      item_id: 'txvcfrt',
      username: 'Mwimwi',
      comment: 'Some comment here',
    },
  ];
  it('test the count of all items', () => {
    expect(display(mockItems)).toBe(mockItems.length);
  });
});