import Add from '../../src/commands/add';
import * as sendCommand from '../../src/things/send-command';

describe('commands/add', () => {
  let stdout: Array<any>;

  beforeEach(() => {
    spyOn(sendCommand, 'sendCommand');

    stdout = [];
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation((val: any): any => stdout.push(val));
  });

  it('adds a task to the Inbox', async () => {
    await Add.run(['test task']);
    expect(stdout[0]).toContain("Added 'test task' to 'Inbox'");
  });

  it('adds a task to the given list', async () => {
    await Add.run(['-l=Test List', 'test task']);
    expect(stdout[0]).toContain("Added 'test task' to 'Test List'");
  });
});
