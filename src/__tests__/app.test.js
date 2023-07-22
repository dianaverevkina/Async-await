import GameSavingLoader from '../js/GameSavingLoader';

test('check function load of class GameSavingLoader', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const result = await GameSavingLoader.load();
  await expect(result).toEqual(expected);
});
