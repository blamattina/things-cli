import { TodoJson, ChecklistJson } from './json';

const filterObject = function (include: Record<string, any>) {
  return Object.keys(include).reduce(function (
    acc: Record<string, any>,
    key: string,
  ) {
    const isUndefiend = typeof include[key] === 'undefined';
    const isEmptyArray = Array.isArray(include[key]) && !include[key].length;

    if (!isUndefiend && !isEmptyArray) {
      acc[key] = include[key];
    }

    return acc;
  },
  {});
};

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
  checklistItems = [],
}: {
  title: string;
  list?: string;
  when?: string;
  checklistItems?: Array<string>;
}): TodoJson {
  return {
    type: 'to-do',
    attributes: {
      title,
      ...filterObject({
        list,
        when,
        'checklist-items': checklistItems.map(buildChecklistItem),
      }),
    },
  };
};
