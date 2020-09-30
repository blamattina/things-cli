import { TodoJson, ChecklistJson, ProjectJson } from './json';
import { filterObject } from '../util/filterObject';

const buildChecklistItem = function (title: string): ChecklistJson {
  return {
    type: 'checklist-item',
    attributes: {
      title,
    },
  };
};

export const buildTodo = function ({
  title,
  list,
  when,
  checklist = [],
}: {
  title: string;
  list?: string;
  when?: string;
  checklist?: Array<string>;
}): TodoJson {
  return {
    type: 'to-do',
    attributes: {
      title,
      ...filterObject({
        list,
        when,
        'checklist-items': checklist.map(buildChecklistItem),
      }),
    },
  };
};

export const buildProject = function ({
  title,
  todos = [],
}: {
  title: string;
  todos?: Array<string>;
}): ProjectJson {
  return {
    type: 'project',
    attributes: {
      title,
      items: todos.map((todo) => buildTodo({ title: todo })),
    },
  };
};
