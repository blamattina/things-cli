import { buildTodo } from '../../src/things/builders';

describe('things/builders', () => {
  describe('buildTodo', () => {
    it('builds a todo with a title', () => {
      const todoJson = buildTodo({ title: 'test todo' });

      expect(todoJson).toEqual({
        type: 'to-do',
        attributes: {
          title: 'test todo',
        },
      });
    });

    it('builds a todo with an optional list', () => {
      const todoJson = buildTodo({ title: 'test todo', list: 'test list' });

      expect(todoJson).toEqual({
        type: 'to-do',
        attributes: {
          title: 'test todo',
          list: 'test list',
        },
      });
    });
  });
});
