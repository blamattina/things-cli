import { Command, flags } from '@oclif/command';
import { buildTodo } from '../things/builders';
import { sendJson } from '../things/send-json';
import { filterObject } from '../util/filterObject';

export default class Add extends Command {
  static description = 'Add a to-do';

  static examples = [
    `$ things add testing 1 2 3
Added 'testing 1 2 3' to 'Inbox'
`,
    `$ things add Milk -l="Shopping List"
Added 'Milk' to 'Shopping List'
`,
    `$ things add Milk -w="tomorrow"
Added 'Milk' to 'Inbox'
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
    when: flags.string({
      char: 'w',
      description: 'when this should appear in the today view',
    }),
    checklist: flags.string({
      char: 'c',
      multiple: true,
      description: 'add an item to the checklist',
    }),
  };

  static args = [{ name: 'todo', description: 'task to add', required: true }];

  async run() {
    const {
      argv,
      flags: { list, when, checklist },
    } = this.parse(Add);

    const title = argv.join(' ');
    const data = [
      buildTodo({ title, list, ...filterObject({ when, checklist }) }),
    ];

    sendJson(data);

    this.log(`Added '${title}' to '${list}'`);
  }
}
