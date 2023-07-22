import GameSavingLoader from '../js/GameSavingLoader';
import read from '../js/reader';

jest.mock('../js/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

// eslint-disable-next-line consistent-return
test('function load - error', async () => {
  read.mockRejectedValue(new Error('Async error message'));
  try {
    const result = await GameSavingLoader.load();
    return result;
  } catch (error) {
    expect(error).toBe('Async error message');
  }
});
