import Add from '../../src/commands/add';
import * as sendJson from '../../src/things/send-json';

describe('commands/add', () => {
  let stdout: Array<any>;

  beforeEach(() => {
    spyOn(sendJson, 'sendJson');

    stdout = [];
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation((val: any): any => stdout.push(val));
  });

  it('adds a task to the Inbox', async () => {
    await Add.run(['Water plants']);
    expect(stdout[0]).toContain("Added 'Water plants' to 'Inbox'");
  });

  it('adds a task to the given list', async () => {
    await Add.run(['-l=Shopping List', 'Milk']);
    expect(stdout[0]).toContain("Added 'Milk' to 'Shopping List'");
  });
});
