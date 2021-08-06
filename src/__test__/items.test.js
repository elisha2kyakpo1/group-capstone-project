import { rapidApi } from '../rapidApi';

describe('Testing Asynchronous Code', () => {
  const counterItems = async () => {
    const getItems = await rapidApi();
    getItems.forEach((element) => {
      return Object.keys(element.id).length - 1;
    });
    return getItems;
  }
  it('test the count of all items', () => {
    expect(counterItems()).toEqual(8);
  });
});