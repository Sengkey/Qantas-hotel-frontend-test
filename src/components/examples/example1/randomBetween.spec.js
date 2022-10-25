import { randomBetween } from "./randomBetween";

const randomSpy = jest.spyOn(Math,'random');

describe('randomBetween', () => {
  describe('when Math.random() returns 0', () => {
    beforeEach(() => {
      // find a way to mock math.random to return 0
      randomSpy.mockClear().mockReturnValue(0);
    });

    it('called with min=3 and max=5 returns 3', () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(Math.random).toBeCalledTimes(1);
    });
  });

  describe('when Math.random() returns 0.5', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });

    it('called with min=3 and max=5 returns 4', () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(Math.random).toBeCalledTimes(1);
    });
  });

  describe('when Math.random() returns 0.999999', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockImplementation(() => 0.999999);
    });

    it('called with min=3 and max=5 returns 5', () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(Math.random).toBeCalledTimes(1);
    });
  });

});

/*
Testing React components and Functions
=========================================
Using jest.mock, jest.spyOn, jest.fn(), __mocks__ folder, etc
- Manual mock dummy data
- YT tutorial: https://www.youtube.com/watch?v=kCe1DDFy09I&list=PLYSZyzpwBEWTBdbfStjqJSGaulqcHoNkT&index=5
- Code example #5: https://github.com/bmvantunes/youtube-react-testing-video5-mocking-with-jest-and-react-testing-library/blob/main/src/examples/example2/Example2.spec.tsx
*/