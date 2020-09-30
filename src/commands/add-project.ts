import { Command, flags } from '@oclif/command';
import { sendJson } from '../things/send-json';

export default class AddProject extends Command {
  static description = 'Add a project';

  static examples = [
    `$ things add testing 1 2 3
Added 'testing 1 2 3' to 'Inbox'
`,
  ];

  static strict = false;

  static flags = {
    help: flags.help({ char: 'h' }),
    task: flags.string({
      char: 't',
      description: 'add a task',
      multiple: true,
    }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const {
      argv,
      flags: { task },
    } = this.parse(AddProject);

    const title = argv.join(' ');

    sendJson([
      {
        type: 'project',
        attributes: {
          title,
          items: task.map((task) => ({
            type: 'to-do',
            attributes: {
              title: task,
            },
          })),
        },
      },
    ]);

    this.log(`added tasks to ${title}`);
  }
}
