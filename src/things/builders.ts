import { TodoJson } from './types';

export const buildTodo = function ({
  title,
  list,
}: {
  title: string;
  list?: string;
}): TodoJson {
  return {
    type: 'to-do',
    attributes: {
      title,
      list,
    },
  };
};
