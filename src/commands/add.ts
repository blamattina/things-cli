import {Command, flags} from '@oclif/command'
import open from 'open'

const encodeParameters = function (params: Record<string, any>): string {
  return Object.keys(params).reduce(function (encoded: string, key: string) {
    encoded += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`
    return encoded
  }, '')
}

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

    const url = `things:///add?${encodeParameters({list: flags.list, title})}`

    open(url)
    this.log(`Added ${title} to ${flags.list}`)
  }
}
