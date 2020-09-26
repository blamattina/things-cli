import { sendCommand } from '../../src/things/send-command';

describe('things/send-command', () => {
  let openUrl: Function;

  beforeEach(() => {
    openUrl = jest.fn();
  });

  it('sends a command with parameters things url scheme', () => {
    sendCommand(
      'command',
      { param1: 'foo', param2: 42, param3: false },
      openUrl,
    );

    expect(openUrl).toHaveBeenCalledWith(
      'things:///command?param1=foo&param2=42&param3=false',
    );
  });

  it('sends a command without parameters to things url scheme', () => {
    sendCommand('command', undefined, openUrl);

    expect(openUrl).toHaveBeenCalledWith('things:///command');
  });
});
