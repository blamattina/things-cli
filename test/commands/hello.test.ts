import Hello from '../../src/commands/hello'
describe('hello', () => {
  let result: Array<any>

  beforeEach(() => {
    result = []
    jest.spyOn(process.stdout, 'write').mockImplementation((val: any): any => result.push(val))
  })

  it('should print hello world', async () => {
    await Hello.run([])
    expect(result[0]).toContain('hello world from ./src/commands/hello.ts')
  })

  it('should print hello blt', async () => {
    await Hello.run(['--name', 'blt'])
    expect(result[0]).toContain('hello blt from ./src/commands/hello.ts')
  })
})
