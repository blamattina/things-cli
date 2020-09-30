import { Command, flags } from '@oclif/command';
import { sendJson } from '../things/send-json';
import { buildProject } from '../things/builders';
import { filterObject } from '../util/filterObject';

export default class AddProject extends Command {
  static description = 'Add a project';

  static examples = [
    `$ things add-project chores
Added project 'chores'
`,
    `$ things add-project chores -t="water plants" -t="take out recycling"
Added project 'chores' with todos: water plants, take out recycling
`,
  ];

  static strict = false;

  static flags = {
    help: flags.help({ char: 'h' }),
    todo: flags.string({
      char: 't',
      description: 'add a task',
      multiple: true,
    }),
  };

  static args = [
    { name: 'project', description: 'project to add', required: true },
  ];

  async run() {
    const {
      argv,
      flags: { todo },
    } = this.parse(AddProject);

    const title = argv.join(' ');

    sendJson([buildProject({ title, ...filterObject({ todos: todo }) })]);

    this.log(
      `Added project '${title}' ${
        todo ? `with todos: ${todo.join(', ')}` : ''
      }`,
    );
  }
}
