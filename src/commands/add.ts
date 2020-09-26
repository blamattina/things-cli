import {Command, flags} from '@oclif/command'
import {sendCommand} from '../things/send-command'

export default class Add extends Command {
  static description = 'Add a to-do'

  static examples = [
    `$ things add testing 1 2 3
Added 'testing 1 2 3' to 'Inbox'
`,
  ]

  static strict = false

  static flags = {
    help: flags.help({char: 'h'}),
    list: flags.string({char: 'l', description: 'list to add to', default: 'Inbox'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {argv, flags} = this.parse(Add)
    const title = argv.join(' ')

    await sendCommand('add', {
      list: flags.list,
      title,
    })

    this.log(`Added ${title} to ${flags.list}`)
  }
}
