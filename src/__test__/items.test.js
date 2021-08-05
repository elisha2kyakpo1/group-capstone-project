import { itemsCount } from "../__mocks__/itemsCount";

describe('Testing Asynchronous Code', () => {
  const getUsers = jest.fn(url => mockUsers);
  it('test the count of all items', () => {
    expect(getUsers(mockUrl)).toBe(mockUsers);
    console.log(getUsers);
  });
  it('called getUser with a mockUrl', () => {
    expect(getUsers).toHaveBeenCalledWith(mockUrl);
  });
});