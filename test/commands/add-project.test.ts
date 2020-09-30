import AddProject from '../../src/commands/add-project';
import { ProjectJson } from '../../src/things/json';
import * as builders from '../../src/things/builders';
import * as sendJson from '../../src/things/send-json';

describe('commands/add-project', () => {
  let stdout: Array<any>;

  beforeEach(() => {
    jest.spyOn(sendJson, 'sendJson').mockImplementation(() => {});
    jest
      .spyOn(builders, 'buildProject')
      .mockReturnValue(<ProjectJson>(<unknown>'JSON'));

    stdout = [];
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation((val: any): any => stdout.push(val));
  });

  it('adds a task to the Inbox', async () => {
    await AddProject.run(['chores']);

    expect(sendJson.sendJson).toHaveBeenCalledWith(['JSON']);

    expect(stdout[0]).toContain("Added project 'chores'");
    expect(builders.buildProject).toHaveBeenCalledWith({
      title: 'chores',
    });
  });

  it('adds a task to the given list', async () => {
    await AddProject.run([
      'chores',
      '-t=water plants',
      '-t=take out recycling',
    ]);

    expect(sendJson.sendJson).toHaveBeenCalledWith(['JSON']);

    expect(stdout[0]).toContain(
      "Added project 'chores' with todos: water plants, take out recycling",
    );
    expect(builders.buildProject).toHaveBeenCalledWith({
      title: 'chores',
      todos: ['water plants', 'take out recycling'],
    });
  });
});
