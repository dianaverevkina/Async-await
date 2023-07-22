import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const saving = new GameSaving(JSON.parse(jsonData));
      return saving;
    } catch (e) {
      return e;
    }
  }
}
