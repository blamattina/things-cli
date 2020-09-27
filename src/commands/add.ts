import { Command, flags } from '@oclif/command';
import { Todo } from '../things/Todo';
import { buildTodo } from '../things/builders';
import { sendJson } from '../things/send-json';

export default class Add extends Command {
  static description = 'Add a to-do';

  static examples = [
    `$ things add testing 1 2 3
Added 'testing 1 2 3' to 'Inbox'
`,
    `$ things add -l="Shopping List" Milk
Added 'Milk' to 'Shopping List'
`,
  ];

  static strict = false;

  static flags = {
    help: flags.help({ char: 'h' }),
    list: flags.string({
      char: 'l',
      description: 'list to add to',
      default: 'Inbox',
    }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const {
      argv,
      flags: { list },
    } = this.parse(Add);

    const title = argv.join(' ');
    const data = [buildTodo({ title, list })];

    sendJson(data);

    this.log(`Added '${title}' to '${list}'`);
  }
}
