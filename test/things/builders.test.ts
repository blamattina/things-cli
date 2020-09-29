import { buildTodo } from '../../src/things/builders';

describe('things/builders', () => {
  describe('buildTodo', () => {
    it('builds a todo with a title', () => {
      const todoJson = buildTodo({ title: 'test todo' });

      expect(todoJson).toMatchSnapshot();
    });

    it('builds a todo with an optional list', () => {
      const todoJson = buildTodo({ title: 'test todo', list: 'test list' });

      expect(todoJson).toMatchSnapshot();
    });

    it('builds a todo with an optional when', () => {
      const todoJson = buildTodo({ title: 'test todo', when: 'today' });

      expect(todoJson).toMatchSnapshot();
    });
  });
});
