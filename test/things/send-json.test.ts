import { sendJson } from '../../src/things/send-json';
import { TodoJson, ProjectJson } from '../../src/things/types';

const TODO_JSON: TodoJson = {
  type: 'to-do',
  attributes: {
    title: 'test todo',
  },
};

const PROJECT_JSON: ProjectJson = {
  type: 'project',
  attributes: {
    title: 'test project',
    items: [TODO_JSON],
  },
};

describe('things/send-json', () => {
  let openUrl: Function;

  beforeEach(() => {
    openUrl = jest.fn();
  });

  it('sends a command with parameters things url scheme', () => {
    sendJson([TODO_JSON, PROJECT_JSON], openUrl);

    expect(openUrl).toHaveBeenCalledWith(
      'things:///json?data=%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22test%20todo%22%7D%7D%2C%7B%22type%22%3A%22project%22%2C%22attributes%22%3A%7B%22title%22%3A%22test%20project%22%2C%22items%22%3A%5B%7B%22type%22%3A%22to-do%22%2C%22attributes%22%3A%7B%22title%22%3A%22test%20todo%22%7D%7D%5D%7D%7D%5D',
    );
  });
});
