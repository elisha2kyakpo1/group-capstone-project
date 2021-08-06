import { it } from "@jest/globals";
import { dspComments } from "../__mocks__/comments";

it('returns a total number of comments by id of an item', async () => {
 await expect(dspComments('1236')).toBe(2);
});