import Add from '../../src/commands/add';
import { TodoJson } from '../../src/things/json';
import * as builders from '../../src/things/builders';
import * as sendJson from '../../src/things/send-json';

describe('commands/add', () => {
  let stdout: Array<any>;

  beforeEach(() => {
    jest.spyOn(sendJson, 'sendJson').mockImplementation(() => {});
    jest
      .spyOn(builders, 'buildTodo')
      .mockReturnValue(<TodoJson>(<unknown>'JSON'));

    stdout = [];
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation((val: any): any => stdout.push(val));
  });

  it('adds a task to the Inbox', async () => {
    await Add.run(['Water plants']);

    expect(sendJson.sendJson).toHaveBeenCalledWith(['JSON']);

    expect(stdout[0]).toContain("Added 'Water plants' to 'Inbox'");
    expect(builders.buildTodo).toHaveBeenCalledWith({
      title: 'Water plants',
      list: 'Inbox',
    });
  });

  it('adds a task to the given list', async () => {
    await Add.run(['-l=Shopping List', 'Milk']);

    expect(sendJson.sendJson).toHaveBeenCalledWith(['JSON']);

    expect(stdout[0]).toContain("Added 'Milk' to 'Shopping List'");
    expect(builders.buildTodo).toHaveBeenCalledWith({
      title: 'Milk',
      list: 'Shopping List',
    });
  });

  it('adds a task on the given date', async () => {
    await Add.run(['-w=Tomorrow', 'Milk']);

    expect(sendJson.sendJson).toHaveBeenCalledWith(['JSON']);

    expect(stdout[0]).toContain("Added 'Milk' to 'Inbox'");
    expect(builders.buildTodo).toHaveBeenCalledWith({
      list: 'Inbox',
      title: 'Milk',
      when: 'Tomorrow',
    });
  });

  it('adds a task on the given date', async () => {
    await Add.run(['task', '-c=step 1', '-c=step 2']);

    expect(sendJson.sendJson).toHaveBeenCalledWith(['JSON']);

    expect(stdout[0]).toContain("Added 'task' to 'Inbox'");
    expect(builders.buildTodo).toHaveBeenCalledWith({
      list: 'Inbox',
      title: 'task',
      checklist: ['step 1', 'step 2'],
    });
  });
});
